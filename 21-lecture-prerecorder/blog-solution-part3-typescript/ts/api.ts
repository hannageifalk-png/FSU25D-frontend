
export interface PostOverview {
    id: number;
    title: string;
    date: string;
    text: string;
}

export interface PostDetails extends PostOverview{
    // id: number;
    // title: string;
    // date: string;
    // text: string;
    image_url: string;
    tags: string[];
}


// Prompt 1: create an async function that fetcehs blog posts from: https://codexplained.se/api/blog_json.php
export async function fetchBlogPosts(): Promise<PostOverview[]> {
    try {
        const response = await fetch('https://codexplained.se/api/blog_json.php');
        return await response.json();
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
}


// Promot 2: fetch from https://codexplained.se/api/post_json.php?post=1
export async function fetchBlogPost(): Promise<PostDetails> {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');
        const response = await fetch(`https://codexplained.se/api/post_json.php?post=${postId}`);
        return await response.json();

    } catch (error) {
        console.error('Error fetching blog post:', error);
        throw error;
    }
}