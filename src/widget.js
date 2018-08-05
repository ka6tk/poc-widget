(function() {
    // source from mdn : https://developer.mozilla.org/en-US/docs/Web/Events/resize#requestAnimationFrame_customEvent

    const throttle = (type, name, obj)=> {
        obj = obj || window;
        let running = false;
        const func = ()=> {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle("resize", "optimizedResize");
})();

(function () {
        const setWidthHeight = (dom)=>{
            dom.width = window.innerWidth>900?window.innerWidth/2:window.innerWidth-30;
            dom.height = window.innerHeight;
        };

    const createIframe = ()=>{
        return new Promise((resolve, reject)=>{
            const rootNode = document.createElement("div")
            rootNode.setAttribute("id","counter-wiget")
            const i = document.createElement("iframe");
            i.setAttribute("allowfullscreen",true);
            // i.src = "http://localhost:8081/";
            i.src = "http://spectacular-payment.surge.sh/";
            i.setAttribute("frameBorder",0)
            i.setAttribute("scrolling","no")
            i.setAttribute("name","")
            setWidthHeight(i);
            i.setAttribute("style","margin:0 auto;display: block;")
            rootNode.appendChild(i);
            document.getElementsByTagName("body")[0].appendChild(rootNode);

            window.addEventListener("optimizedResize",  ()=> {
                        setWidthHeight(i);
            });
            resolve(i)
        })
    }

    // const pwConfig = {};

    const PayWall = ()=>{
        return {
            setConfig: (config)=>{
                createIframe().then(iframe=>{
                    // console.log(config,iframe)
                    iframe.onload = ()=>{
                        iframe.contentWindow.postMessage({type:"init",config},"*")
                    }
                })
            }
        }
    };

    window.paywall = window.paywall || PayWall()

})();