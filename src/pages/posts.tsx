import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { Config } from '../utils/Config';
import { getAllPosts, PostItems } from '../utils/Content';
import { convertTo2D } from '../utils/Pagination';

const Index = (props: IBlogGalleryProps) => (
  <Main meta={<Meta title="posts" description={Config.description} />}>
    <p>Nothing here yet...</p>

    <div className="hidden">
      <BlogGallery posts={props.posts} pagination={props.pagination} />
    </div>
  </Main>
);

export async function getPageProps(posts: PostItems[], currentPage: number) {
  const pages = convertTo2D(posts, Config.pagination_size);
  const pagination: IPaginationProps = {};

  if (currentPage < pages.length) {
    pagination.next = `page${currentPage + 1}`;
  }

  if (currentPage === 2) {
    pagination.previous = '/posts';
  } else if (currentPage > 2) {
    pagination.previous = `page${currentPage - 1}`;
  }

  return {
    props: {
      posts: pages[currentPage],
      pagination,
    },
  };
}

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'hide']).filter((p) => !p.hide);
  return getPageProps(posts, 0);
};

export default Index;
