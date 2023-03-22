
export const get = async (url) => {

    return await fetch(url).then(res => res.json());

};

//C:\Users\Simpleagro\Desktop\walter\projetos\pitagoras-bookstore\src\infra\bookstore.json