const jsFrame = new JSFrame();//jsFrameオブジェクトを作る
        const frames = [];
        for (let i = 0; i < 3; i++) {
            const frame = jsFrame.create({
                name: `Win${i}`,
                title: `Win${i} - Yosemite style`,
                left: 20 + (320 + 20) * i, top: 50, width: 320, height: 220, minWidth: 200, minHeight: 110,
                appearanceName: 'yosemite',//プリセット名 yosemite を指定
                style: {
                    backgroundColor: 'rgba(255,255,255,0.8)', //背景色は半透明に
                    overflow:'auto'
                },
                //ココに表示したいHTMLを直接設定するか、 url:'' でurl指定するとその内容をiframeで表示
                html: '<div style="padding:10px;">Your contents here.</div>'
            }).show();

            frame.setControl({
                styleDisplay:'inline',
                maximizeButton: 'zoomButton',
                demaximizeButton: 'dezoomButton',
                minimizeButton: 'minimizeButton',
                deminimizeButton: 'deminimizeButton',
                hideButton: 'closeButton',
                animation: true,
                animationDuration: 150,

            });
            frame.control.on('hid', (frame, info) => {
                frame.closeFrame();
            });
            frames.push(frame);
        }
        frames[0].requestFocus();