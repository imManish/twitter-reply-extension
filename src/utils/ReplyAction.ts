import config from "../config/config";
const url: any = config.URI;
const key: string = config.KEY;

export class ReplyAction {
    
    /**
     * @var string
     */
    public url:string = '';

    /**
     * @var string
     */
    public key:string = '';
    
    // Define the function that generates the AI reply using GPT-3
    generateAIReply = async (tweetText : string) =>  {
        const opts: RequestInit =  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
            },
            body: JSON.stringify({
                prompt: tweetText,
                max_tokens: 60,
                temperature: 0.8,
                n: 1,
                stop: ['\n'],
                model: 'text-davinci-003'
            })
        };        
        const response = await fetch(url,opts);
        const { choices } = await response.json();
        const aiReply = choices[0].text.trim();
        return aiReply;
    }   
    
    
}

