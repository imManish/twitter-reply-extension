(function(){
    function addAIReplyButton() {
        const replyButton = document.querySelector('div[data-testid="reply"]');
        const aiReplyButton = document.createElement('button');
        aiReplyButton.innerText = 'Generate AI Reply';
        aiReplyButton.addEventListener('click', async () => {
        const tweetBox = replyButton.closest('div[data-testid="textbox"]'); 
        const tweetText =tweetBox.innerText;
        const replyAction = new window.MyExposedNamespace.ReplyAction();
        const aiReply = await replyAction.generateAIReply(tweetText);
        tweetBox.innerText = aiReply;
        });
        replyButton.parentNode.insertBefore(aiReplyButton, replyButton.nextSibling);
    } 
    window.addEventListener('load', addAIReplyButton);                    
})();     