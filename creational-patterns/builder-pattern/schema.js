export const commentSchema = {
    title: 'Comment schema',
    type: 'object',
    required: ['name', 'url', 'uid'],
    properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },
        movie_id: { type: 'string' },
        text: { type: 'string' },
        date: { type: 'date' }
    }
};