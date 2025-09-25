import { PageBuilder } from '@/app/components/blocks/PageBuilder';
import { sanityFetch } from '@/sanity/lib/live';
import { PAGE_QUERY } from '@/sanity/lib/queries';

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: page } = await sanityFetch({
    query: PAGE_QUERY,
    params: await params,
  });

  return page?.content ? <PageBuilder content={page.content} /> : null;
}
