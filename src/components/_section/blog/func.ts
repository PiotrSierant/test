import { PostData } from "./types";

export const createPost = async (formValues: PostData) => {
    try {
        const res = await fetch('../api/blog/create-post', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues)
        })
        const data = await res.json();
        const { error, success } = data;
        if (success) {
            return data
        }
        if (error || !res.ok) {
            throw new Error(error);
        }
    }
    catch (err: any) {
        throw new Error(err.message);
    }
}

export const revalidateList = async () => {
    try {
        const res = await fetch(`../api/revalidate/blog-list?secret=${process.env.NEXT_PUBLIC_REVALIDATE_SECRET_TOKEN}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await res.json();
        const { error, revalidated } = data;
        if (revalidated) {
            return data
        }
        if (error || !res.ok) {
            throw new Error(error);
        }
    }
    catch (err: any) {
        throw new Error(err.message);
    }
}