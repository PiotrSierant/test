export interface PostData {
    idAuthor: string;
    image: string;
    title: string;
    slug: string;
    timeRead: number;
    category: CategoryModel[];
    content: string;
}

interface CategoryModel {
    value: string;
    label: string;
}

export type FieldType = "title" | "image" | "slug" | "content" | "category";
