# JsEmojis &#x1F603;


### Install
`npm install --save js_emojis`

### Configuration

|Property|Type|Default|
|:---|:--|:--|
|el|String|input[type="text"]
|insertTo|[Node](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)|afterend
|mainClass|String|emoji_main
|emojiContentClass|String|emojis_content
|btnClass|String|emoji_btn
|btnText|String|:)
|btn|String|span


#### Static HTML

```html

<link rel="stylesheet" href="/node_modules/js_emojis/assets/css/jsemojis.css" />
.....

<!-- EXAMPLE -->

<!-- Imortant to contain element in row class or you can contain it 
         in your class which must have property display:flex
    -->
    ....
    <div class="row">
       <input type="text">
    </div>
    ....
    <script src="/node_modules/js_emojis/Jsemoji.js"></script>
    <script>

        // Setup JsEmoji
        JsEmoji.set({
            btn:'button',
            btnText:'JS'
        });

        // Run JsEmoji
        JsEmoji.start();
        
        //** Example **//
        let input = document.querySelector('input[type="text"]'),
            ul    = document.createElement('ul');

        input.addEventListener('keyup' , (e) => {
            if(e.which == 13){
                let li = document.createElement('li');
                li.textContent = e.target.value;
                ul.appendChild(li);
                document.body.appendChild(ul);
            }
        });

    </script>
    
<!-- -->


```
### In Node.js
```js
import 'js_emojis'


```
