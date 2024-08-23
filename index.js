require('dotenv').config();

import OpenAI from 'openai';
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const completion = (async () => {
    return await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: 'You are a helpful assistant' },
            {
                role: 'user',
                content: 'Write a haiku about recursion in programming',
            },
        ],
    });
})();

if (completion.choices.length > 0) console.log(completion.choices[0].message);
