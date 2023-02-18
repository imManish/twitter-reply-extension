import config from "../config/config";
const url: any = config.URI;
const key: string = config.KEY;


class ReplyAction {
    
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
    
    // Define the function that adds the AI reply button to the Twitter UI
    addAIReplyButton = () =>  {
        const replyButton: any = document.querySelector('div[data-testid="reply"] button') as HTMLDivElement | null;;
        const aiReplyButton: any = document.createElement('button');
        aiReplyButton.innerText = 'Generate AI Reply';
        aiReplyButton.addEventListener('click', async () => {
          const tweetBox = replyButton.closest('div[role="textbox"]');
          const tweetText = tweetBox.innerText;
          const aiReply = await this.generateAIReply(tweetText);
          tweetBox.innerText = aiReply;
        });
        replyButton.parentNode.insertBefore(aiReplyButton, replyButton.nextSibling);
      } 
}

export const Reply = new ReplyAction(); //(config.URI,config.KEY)