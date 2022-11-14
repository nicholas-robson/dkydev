import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Config } from '../utils/Config';
import { getAllPosts } from '../utils/Content';
import { convertTo2D } from '../utils/Pagination';
import { getPageProps } from './posts';

type IPageUrl = {
  page: string;
};

const PaginatePosts = (props: IBlogGalleryProps) => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const posts = getAllPosts(['slug']);

  const pages = convertTo2D(posts, Config.pagination_size);

  return {
    paths: pages.slice(1).map((_, ind) => ({
      params: {
        // Ind starts from zero, so we need to do ind + 1
        // slice(1) removes the first page, so we do another ind + 1
        // the first page is implemented in index.tsx
        page: `page${ind + 2}`,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IBlogGalleryProps, IPageUrl> = async ({ params }) => {
  const currentPage = Number(params!.page.replace('page', ''));
  const posts = getAllPosts(['title', 'date', 'slug', 'hide']).filter((p) => !p.hide);
  return getPageProps(posts, currentPage);
};

export default PaginatePosts;
