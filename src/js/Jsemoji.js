import emojis from '../js/Emojis';

const  CONFIG= {

    el:'input[type="text"]',
    insertTo:'afterend',

    mainClass:'emoji_main',
    emojiContentClass:'emojis_content',

    btnClass:'emoji_btn',
    btnText:':)',
    btn:`span`
}

/** @private  */
function _isNumber(value){
    return typeof value == 'number';
}

/** @private  */
function _isEqualTypes(value1, value2){
    return typeof value1 === typeof value2;
}

/** @private  */
function _isUndefined(value){
    return value === undefined;
}

/** @private  */
function _create(value , nameClass){

     let el = document.createElement(value);

     if(!_isUndefined(nameClass))
        el.className = nameClass;

    return el;
}

/** @private  Instead of  document.querySelector  */
function _select(elem){
    return document.querySelector(elem);
}

/** @private  Instead of  document.querySelectorAll*/
function _selectAll(elem){
    return document.querySelectorAll(elem);
}

const emojiParser = function(document){
    let regExp = /_\w+/gi;
  
        console.log(document);
        
        for(let doc of document){
            console.log(doc);
            
            let text = doc.textContent.trim();
            let match = text.match(regExp);

            if(regExp.test(text)){  
                for(let code in emojis){
                    for(let i = 0; i < match.length; i++){

                        if(text.includes(match[i]) && code == match[i] ){
                            text = text.replace(match[i] , emojis[code] );
                            // doc.setAttribute('data-code' , code);
                            doc.innerHTML = text;
                        }     
                    } 
                } 
            }

        }
}


const JsEmoji = () =>  {

    /** @protected Set Emojs */
    const setEmojis = function(insert){

        for(let code in emojis){
            let span = _create('span' , 'emoji');
            span.innerHTML = emojis[code];
            span.setAttribute('title' , code);
            insert.appendChild(span);
        }  
        
        return getEmojis();
        
    }
    /** @protected Set Emojs */
    const getEmojis = function(){

        let spans = _selectAll('.emoji'),
                input = _select(CONFIG.el);
                
             spans.forEach(el => {
                  el.addEventListener('click' ,  () => {
                      let  text  = el.textContent;
                        input.value += text + ' ';
                  });
            });

    }

    /** @protected Delete Emoji */
    const deleteEmojis = function(){

        let spans = _selectAll('.emoji');
        if(!_isUndefined(spans))
            spans.forEach(el => el.remove());

    }

    const emojiParser = function(document){
        let regExp = /_\w+/gi;
            console.log(_selectAll('li'));
            
            for(let doc of document){

                let text = doc.textContent.trim();
                let match = text.match(regExp);

                if(regExp.test(text)){  
                    for(let code in emojis){
                        for(let i = 0; i < match.length; i++){

                            if(text.includes(match[i]) && code == match[i] ){
                                text = text.replace(match[i] , emojis[code] );
                                // doc.setAttribute('data-code' , code);
                                doc.innerHTML = text;
                            }     
                        } 
                    } 
                }

            }
    }


    return {
       set(obj){  
		try{
			let  _objKeys  = Object.keys(obj);

			_objKeys.map(key1 => {
					try{

						if(CONFIG.hasOwnProperty(key1)){    
							if(obj(CONFIG[key1] , CONFIG[key2])){
								let _obj = Object.create(null);
								_obj[key1] = obj[key1];

								Object.assign(CONFIG , _obj);
							}
							else 
							  throw `Type of ${obj[key1]} not equls to CONIG type`
						}
						else
							throw 'Inccorect object name';

					}
					catch(e){
						console.error(e);

				});
			});
		}
		catch(e){throw 'Error:Params Must be an object';}
			
        },
        start(){
            let insertAfter   = _select(CONFIG.el),
                isClicked     = false;
                    
            if(insertAfter){

               let mainDiv        =  _create('div' , CONFIG.mainClass),
                   emojisConetent =  _create('div' , CONFIG.emojiContentClass),
                   button         = _create(CONFIG.btn , CONFIG.btnClass);
                   
        
               insertAfter.insertAdjacentElement(CONFIG.insertTo , mainDiv);

               if(CONFIG.btnText !== '')
                    button.textContent = CONFIG.btnText;

               mainDiv.appendChild(button);
               mainDiv.appendChild(emojisConetent);

               button.addEventListener('click' , () => {

                   isClicked = !isClicked;
                   
                   if(isClicked){
                       emojisConetent.style = 'display:block;';

                       let  emjisContentSelect = _select('.' + CONFIG.emojiContentClass);
                       setEmojis(emjisContentSelect);
                   }
                   else{
                     emojisConetent.style = 'display:none;';
                     deleteEmojis();
                   }

               } , false);


            }     
           
        }
    }
}

window.JsEmoji = JsEmoji();

export default JsEmoji;




