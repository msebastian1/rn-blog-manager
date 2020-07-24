import createDataContext from './createDataContext';

type BlogItemType = {
    title: string,
}
const initialState = [{ title: 'Blog Post #1' }, { title: 'Blog Post #2' }]

//export const BlogContext = createContext<{ data: Array<BlogItemType>, addBlogPost: () => void }>(initialState);

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return [...state, { title: `${state.length + 1}` }];
        default:
            return state;
    }

}

const addBlogPost = (blogDispatcher) => {
    return () => {blogDispatcher({ type: 'ADD_BLOG' })};
}

export const { Context, Provider } = createDataContext(blogReducer, {addBlogPost}, initialState);