import { defineField, defineType } from 'sanity';

export const splitImageType = defineType({
  name: 'splitImage',
  type: 'object',
  fields: [
    defineField({
      name: 'orientation',
      type: 'string',
      options: {
        list: [
          { value: 'imageLeft', title: 'Image Left' },
          { value: 'imageRigth', title: 'Image Right' },
        ],
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'Image',
    },
    prepare(value, viewOptions) {
      const { media, title } = value;

      return {
        title,
        subtitle: 'Text and Image',
        media,
      };
    },
  },
});
