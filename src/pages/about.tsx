import { GetStaticProps } from 'next';
import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { getPostBySlug } from '../utils/Content';
import { markdownToHtml } from '../utils/Markdown';

const About = (props: { title:string, description:string, content:string}) => 
(
    <Main
      meta={(
        <Meta
          title={props.title}
          description={props.description}
        />
      )}
    >
      <Content>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </Content>
    </Main>
  );


export const getStaticProps: GetStaticProps = async () => {
  const post = getPostBySlug("about", ['title', 'description', 'content']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      title: post.title,
      description : post.description,
      content,
    },
  };
};

export default About;
