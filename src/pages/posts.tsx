import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { Config } from '../utils/Config';
import { getAllPosts } from '../utils/Content';

const Index = (props: IBlogGalleryProps) => (
  <Main
    meta={(
      <Meta
        title="posts"
        description={Config.description}
      />
    )}
  >

    <p>Nothing here yet...</p>

    <div className="hidden">
    <BlogGallery posts={props.posts} pagination={props.pagination} />
    </div>

    
  </Main>
);



export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'hide']).filter(p => !p.hide);
  const pagination: IPaginationProps = {};

  if (posts.length > Config.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, Config.pagination_size),
      pagination,
    },
  };
};

export default Index;
