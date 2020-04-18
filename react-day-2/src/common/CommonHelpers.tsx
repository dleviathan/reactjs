class CommonHelpers {
    genJsFromCDN = (src: string, externals = []) => {
        new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.setAttribute('src', src);
            script.setAttribute('crossorigin', 'anonymous');
            document.head.appendChild(script)
        })
    };

    genCssFromCDN = (src: string, externals = []) => {
        new Promise((resolve, reject) => {
            const styleSheet = document.createElement('link');
            styleSheet.setAttribute('href', src);
            styleSheet.setAttribute('rel', 'stylesheet');
            styleSheet.setAttribute('type', 'text/css');
            document.head.appendChild(styleSheet)
        })
    }
}

const commonHelpers = new CommonHelpers();
export default commonHelpers;