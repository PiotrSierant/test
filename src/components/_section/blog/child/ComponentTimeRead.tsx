export const ComponentTimeRead = ({ time }: { time: string }) => {
    const number = Number(time);
    if (number == 1) {
        return (
            <small>{time} minuta czytania</small>
        )
    }
    if (number == 2 || number == 3 || number == 4) {
        return (
            <small>{time} minuty czytania</small>
        )
    }
    return (
        <small>{time} minut czytania</small>
    )
}