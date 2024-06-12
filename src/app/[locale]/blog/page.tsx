'use client';

import { useEffect, useState } from 'react';

import { JoinForm } from '@/components/Forms/JoinForm';
import { PostDataType } from '@/types/post';

import { SectionCategory } from '../home/section/facilities';

import { SectionPosts } from './section/all-posts';
import { SectionFeaturedPost } from './section/features-post';

import styles from '../styles.module.scss';

const MIN_PAGE = 1;
const LIMIT_POSTS = 10;

export default function Blog() {
  const [posts, setPosts] = useState<PostDataType[] | undefined>([]);
  const [featuredPost, setFeaturedPost] = useState<PostDataType | null | undefined>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getNextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getPrevPage = () => {
    setPage((prev) => Math.max(prev - 1, MIN_PAGE));
  };

  return (
    <main className={styles.main}>
      {featuredPost && <SectionFeaturedPost data={featuredPost} />}
      <SectionPosts
        data={posts!}
        clickNext={getNextPage}
        clickPrev={getPrevPage}
        disablePrev={page === MIN_PAGE}
        disableNext={page === totalPages}
      />
      <SectionCategory />
      <JoinForm />
    </main>
  );
}
