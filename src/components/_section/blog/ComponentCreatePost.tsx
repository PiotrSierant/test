import styles from './ComponentCreatePost.module.scss';
import classnames from 'classnames';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Image from 'next/image';
import { Layout } from '../layout/ComponentLayout';
import { EditorZS } from '../../_basic/editor/Editor';
import { ComponentLoader } from '../../_basic/loader/ComponentLoader';
import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { AxiosError } from 'axios';
import { FieldType, PostData } from './types';
import { categoryList, validators } from './data';
import { createPost, revalidateList } from './func';
import { convertBase64 } from '../../../helpers/convertToBase64';
import { toast } from 'sonner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '../../../helpers/eventEmitter';
import { ComponentErrorMessage } from './child/ComponentErrorMessage';
import { ComponentLoader as ComponentLoaderSend } from '../../_basic/loader-dashboard/ComponentLoader';

const animatedComponents = makeAnimated();

export const ComponentCreatePost = ({ idAuthor }: { idAuthor: string }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [submitError, setSubmitError] = useState<string>("");
    const [currentTheme, setCurrentTheme] = useState<string>("");
    const [formValues, setFormValues] = useState<PostData>({ title: "", image: "", slug: "", content: "", timeRead: 0, category: [], idAuthor: idAuthor })
    const [validationError, setValidationError] = useState<{ [key: string]: boolean }>({ title: false, image: false, slug: false, content: false, timeRead: false, category: false, idAuthor: false });
    const [content, setContent] = useState<boolean>(false);

    useEffect(() => {
        const currentThemeInit = localStorage.getItem('theme')?.toString();
        EventEmitter.subscribe<string>('theme', (data: string) => {
            return setCurrentTheme(data);
        });
        setCurrentTheme(currentThemeInit == undefined ? "light" : currentThemeInit)
    }, [])

    const onChange = (key: string, value: any) => {
        if (key == 'slug') {
            setFormValues(prev => ({ ...prev, ...{ [key]: value.trimStart().replace(/\s+/g, '-') } }));
            return
        }
        setFormValues(prev => ({ ...prev, ...{ [key]: value } }))
    }

    const handleChange = (selectedOption: any) => {
        onChange("category", selectedOption)
    };

    const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files !== null && event.target.files[0];
        if (!file) {
            toast.error("Coś poszło nie tak, spróbuj ponownie!");
            return
        }
        if (file && file.size / 1024 / 1024 > 1) {
            toast.error("Zdjęcie jest zbyt duże (max 1MB).");
            return
        }
        toast.promise(convertBase64(file), {
            loading: 'Przetwarzanie...',
            success: (res) => {

                onChange("image", res);
                return `Sukcess - Pomyślnie dodano zdjęcie!`;
            },
            error: 'Error - Coś poszło nie tak!',
        })
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const error = { ...validationError };
        for (const [field, value] of Object.entries(formValues)) {
            error[field as FieldType] = validators[field as FieldType](value);
        }
        setValidationError(error);
        if (Object.values(error).filter(Boolean).length) return
        try {
            setLoading(true);
            formValues.timeRead = Math.ceil(formValues.timeRead / 200);
            createPost(formValues)
                .then(() => {
                    setSubmitError("");
                    setFormValues({ title: "", image: "", slug: "", content: "", timeRead: 0, category: [], idAuthor });
                    setValidationError({ title: false, image: false, slug: false, content: false, timeRead: false, category: false, idAuthor: false });
                    setContent(!content);
                    scrollTo(0, 0)

                    revalidateList()
                        .then(() => {
                            setLoading(false);
                        })
                        .catch(() => {
                            setLoading(false);
                        })
                })
                .catch((error) => {
                    setSubmitError(error);
                    setLoading(false);
                })

        } catch (error) {
            if (error instanceof AxiosError) {
                const errorMsg = error.response?.data?.error
                setSubmitError(errorMsg);
                setLoading(false);
            }
        }
    }

    return (
        <Layout id={"Logowanie"} bg={styles.background} extendWrapper={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
                {formValues.image
                    ? <div className={styles.imageWrapper}>
                        <Image src={formValues.image} alt={"Header Blog Photo"} width={842} height={300} />
                        <FontAwesomeIcon icon={faTrashAlt} width={30} height={30} onClick={() => { onChange("image", "") }} />
                    </div>
                    : (
                        <div className={classnames(styles.parent, { [styles.invalid]: validationError["image"] })}>
                            <div className={styles["file-upload"]}>
                                <FontAwesomeIcon icon={faCloudArrowUp} width={50} height={50} />
                                <h3>Kliknij aby dodać lub przeciągnij zdjęcie</h3>
                                <p>Maximun file size 1MB</p>
                                <p>Najlepiej w rozmiarze 842x300</p>
                                <input
                                    id="image"
                                    placeholder='Dodaj zdjęcie główne'
                                    type='file'
                                    accept="image/*"
                                    onChange={(e) => uploadImage(e)}
                                    className={classnames(styles.input, { [styles.invalid]: validationError["image"] })}
                                />
                            </div>
                        </div>

                    )
                }
                <section className={styles.group}>
                    <input
                        id="title"
                        value={formValues.title}
                        placeholder="Tytuł posta"
                        type="text"
                        minLength={3}
                        maxLength={124}
                        required
                        autoComplete={"off"}
                        onChange={(evt) => onChange("title", evt.target.value)}
                        className={classnames(styles.input, { [styles.invalid]: validationError["title"] })}
                    />
                </section>
                <section className={styles.group}>
                    <input
                        id="slug"
                        value={formValues.slug}
                        placeholder="Slug posta"
                        type="text"
                        minLength={3}
                        maxLength={124}
                        required
                        autoComplete={"off"}
                        onChange={(evt) => onChange("slug", evt.target.value)}
                        className={classnames(styles.input, { [styles.invalid]: validationError["slug"] })}
                    />
                </section>
                <Select
                    options={categoryList}
                    value={formValues.category}
                    isMulti={true}
                    components={animatedComponents}
                    className={styles.select}
                    styles={{
                        option: (base) => {
                            return ({
                                ...base,
                                ":active": {
                                    ...base[":active"],
                                    color: "#ffffff"
                                },
                                ":hover": {
                                    color: "#ffffff"
                                },
                                height: '100%',
                            })
                        },
                    }}
                    theme={(theme) => {
                        return ({
                            ...theme,
                            colors: {
                                ...theme.colors,
                                neutral0: currentTheme == 'dark' ? '#181818' : '#ffffff', // background
                                primary: "#be3760",
                                primary25: "#be3760",
                                neutral50: "#9BA2AE", // kolor placeholder
                                neutral10: currentTheme == 'dark' ? '#111' : '#E6E6E6', //?
                                neutral80: currentTheme == 'dark' ? "#ffffff" : 'black'
                            },
                        })
                    }}
                    onChange={handleChange}
                />
                <EditorZS onChange={onChange} setcontent={content} />
                <button type="submit" className={classnames(styles.button, loading && styles.loadingButton)}>
                    {loading ? <ComponentLoader text={''} /> : 'Dodaj post'}
                </button>
            </form>
            <ComponentErrorMessage validationError={validationError} submitError={submitError} />
            {loading && <ComponentLoaderSend createPost={true} />}
        </Layout >
    )
}