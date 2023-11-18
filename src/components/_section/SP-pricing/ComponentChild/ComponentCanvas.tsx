import React from 'react';
import { useEffect } from 'react';
import styles from '../ComponentPricing.module.scss';
import { useDeviceSize } from '../../../../hooks/useDeviceSize';

export const ComponentCanvas = () => {
    const [width, _] = useDeviceSize();

    useEffect(() => {
        const Canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
        const ctx = Canvas?.getContext('2d');

        const resize = function () {
            if (Canvas) {
                Canvas.width = Canvas.clientWidth;
                Canvas.height = Canvas.clientHeight;
            }
        };

        window.addEventListener('resize', resize);
        resize();

        interface Element {
            x: number;
            y: number;
            r: number;
            w: number;
            dx: number;
            dy: number;
            dr?: number;
            s?: number;
            draw: (ctx: CanvasRenderingContext2D, t: number) => void;
        }

        const presets: { [key: string]: (...args: any[]) => Element } = {};

        presets.o = function (x: number, y: number, s: number, dx: number, dy: number) {
            return {
                x: x,
                y: y,
                r: 12 * s,
                w: 5 * s,
                dx: dx,
                dy: dy,
                draw: function (ctx, t) {
                    this.x += this.dx;
                    this.y += this.dy;

                    ctx.beginPath();
                    ctx.arc(
                        this.x + Math.sin((50 + x + t / 10) / 100) * 3,
                        this.y + Math.sin((45 + x + t / 10) / 100) * 4,
                        this.r,
                        0,
                        2 * Math.PI,
                        false
                    );
                    ctx.lineWidth = this.w;
                    ctx.strokeStyle = '#f44d85';
                    ctx.stroke();
                },
            };
        };

        presets.x = function (x, y, s, dx, dy, dr, r) {
            r = r || 0;
            return {
                x: x,
                y: y,
                s: 20 * s,
                w: 5 * s,
                r: r,
                dx: dx,
                dy: dy,
                dr: dr,
                draw: function (ctx, t) {
                    this.x += this.dx;
                    this.y += this.dy;
                    this.r += this.dr || 0;

                    let _this = this;
                    let line = function (x: number, y: number, tx: number, ty: number, c: string, o: number) {
                        o = o || 0;
                        ctx.beginPath();
                        ctx.moveTo(-o + (s / 2) * x, o + (s / 2) * y);
                        ctx.lineTo(-o + (s / 2) * tx, o + (s / 2) * ty);
                        ctx.lineWidth = _this.w;
                        ctx.strokeStyle = c;
                        ctx.stroke();
                    };
                    ctx.save();
                    ctx.translate(
                        this.x + Math.sin((x + t / 10) / 100) * 5,
                        this.y + Math.sin((10 + x + t / 10) / 100) * 2
                    );
                    ctx.rotate(this.r * Math.PI / 1500);

                    line(-1, -1, 1, 1, '#f44d85', s);
                    line(1, -1, -1, 1, '#481ea7', s);

                    ctx.restore();
                },
            };
        };

        const elements: Element[] = [];
        for (let x = 0; x < (Canvas ? Canvas.width : 0); x++) {
            for (let y = 0; y < (Canvas ? Canvas.height : 0); y++) {
                if (Math.round(Math.random() * 25000) == 1) {
                    let s = (Math.random() * 5 + 1) / 10;
                    if (Math.round(Math.random()) == 1)
                        elements.push(presets.o(x, y, s, 0, 0));
                    else
                        elements.push(
                            presets.x(
                                x,
                                y,
                                2,
                                0,
                                0,
                                (Math.random() * 3 - 1) / 10,
                                Math.random() * 360
                            )
                        );
                }
            }
        }
        const animationInterval = setInterval(function () {
            if (ctx) {
                ctx.clearRect(0, 0, Canvas ? Canvas.width : 0, Canvas ? Canvas.height : 0);

                let time = new Date().getTime();
                for (let e in elements) elements[e].draw(ctx, time);
            }
        }, 10);

        return () => {
            clearInterval(animationInterval);
            window.removeEventListener('resize', resize);
        };
    }, [width]);
    return (
        <canvas id="canvas" className={styles.canvas} width="1519" height="1018"></canvas>
    )
}