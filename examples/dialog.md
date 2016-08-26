# alinw/dialog动画

---

<link rel="stylesheet" href="//g.alicdn.com/platform/common/s/1.1/global/global.css" />
<link rel="stylesheet" href="https://alinw.alicdn.com/alinw/dialog/2.0.6/dialog.css" />
<link rel="stylesheet" href="../src/kuma-animate.css" />
<style type="text/css">
    .kuma-button-cont{
        margin: 20px auto;
    }
    .kuma-button-cont .kuma-button{
        margin: 5px 2px;
    }
</style>

## Dialog Animation Effects

> 注意：alinw/dialog@2.0.7版本开始支持动画，如果需要使用动画，请先升级alinw/dialog版本号

### Fade In & Scale

````html
<button class="kuma-button kuma-button-lorange" id="button1">Fade In & Scale</button>
````

````javascript
seajs.use(['$', 'dialog'], function($, Dialog){
    new Dialog({
        trigger: "#button1",
        width: 500,
        content: "<div class='kuma-dialog-content'><div class='kuma-dialog-title'>I am title</div><p style='margin: 50px 30px;'>I am body.</p><div>",
        effect: "ani-dialog-fadeIn"
    });
});
````

### Slide In(Right)

````html
<button class="kuma-button kuma-button-lorange" id="button2">Slide In(Right)</button>
````

````javascript
seajs.use(['$', 'dialog'], function($, Dialog){
    new Dialog({
        trigger: "#button2",
        width: 500,
        content: "<div class='kuma-dialog-content'><div class='kuma-dialog-title'>I am title</div><p style='margin: 50px 30px;'>I am body.</p><div>",
        effect: "ani-dialog-slideInRight"
    });
});
````

### Slide In(Down)

````html
<button class="kuma-button kuma-button-lorange" id="button3">Slide In(Down)</button>
````

````javascript
seajs.use(['$', 'dialog'], function($, Dialog){
    new Dialog({
        trigger: "#button3",
        width: 500,
        content: "<div class='kuma-dialog-content'><div class='kuma-dialog-title'>I am title</div><p style='margin: 50px 30px;'>I am body.</p><div>",
        effect: "ani-dialog-slideInDown"
    });
});
````

### Newspaper

````html
<button class="kuma-button kuma-button-lorange" id="button4">Newspaper</button>
````

````javascript
seajs.use(['$', 'dialog'], function($, Dialog){
    new Dialog({
        trigger: "#button4",
        width: 500,
        content: "<div class='kuma-dialog-content'><div class='kuma-dialog-title'>I am title</div><p style='margin: 50px 30px;'>I am body.</p><div>",
        effect: "ani-dialog-newspaper"
    });
});
````

### Fall

````html
<button class="kuma-button kuma-button-lorange" id="button5">Fall</button>
````

````javascript
seajs.use(['$', 'dialog'], function($, Dialog){
    new Dialog({
        trigger: "#button5",
        width: 500,
        content: "<div class='kuma-dialog-content'><div class='kuma-dialog-title'>I am title</div><p style='margin: 50px 30px;'>I am body.</p><div>",
        effect: "ani-dialog-fall"
    });
});
````

### 3D Fall(Horizontal)

````html
<button class="kuma-button kuma-button-lorange" id="button6">3D Fall(Horizontal)</button>
````

````javascript
seajs.use(['$', 'dialog'], function($, Dialog){
    new Dialog({
        trigger: "#button6",
        width: 500,
        content: "<div class='kuma-dialog-content'><div class='kuma-dialog-title'>I am title</div><p style='margin: 50px 30px;'>I am body.</p><div>",
        effect: "ani-dialog-3dfallH"
    });
});
````

### 3D Fall(Vertical)

````html
<button class="kuma-button kuma-button-lorange" id="button7">3D Fall(Vertical)</button>
````

````javascript
seajs.use(['$', 'dialog'], function($, Dialog){
    new Dialog({
        trigger: "#button7",
        width: 500,
        content: "<div class='kuma-dialog-content'><div class='kuma-dialog-title'>I am title</div><p style='margin: 50px 30px;'>I am body.</p><div>",
        effect: "ani-dialog-3dfallV"
    });
});
````

### 3D Sign

````html
<button class="kuma-button kuma-button-lorange" id="button8">3D Sign</button>
````

````javascript
seajs.use(['$', 'dialog'], function($, Dialog){
    new Dialog({
        trigger: "#button8",
        width: 500,
        content: "<div class='kuma-dialog-content'><div class='kuma-dialog-title'>I am title</div><p style='margin: 50px 30px;'>I am body.</p><div>",
        effect: "ani-dialog-3dsign"
    });
});
````

### Super Scale

````html
<button class="kuma-button kuma-button-lorange" id="button9">Super Scale</button>
````

````javascript
seajs.use(['$', 'dialog'], function($, Dialog){
    new Dialog({
        trigger: "#button9",
        width: 500,
        content: "<div class='kuma-dialog-content'><div class='kuma-dialog-title'>I am title</div><p style='margin: 50px 30px;'>I am body.</p><div>",
        effect: "ani-dialog-superscale"
    });
});
````

### 3D Slit

````html
<button class="kuma-button kuma-button-lorange" id="button10">3D Slit</button>
````

````javascript
seajs.use(['$', 'dialog'], function($, Dialog){
    new Dialog({
        trigger: "#button10",
        width: 500,
        content: "<div class='kuma-dialog-content'><div class='kuma-dialog-title'>I am title</div><p style='margin: 50px 30px;'>I am body.</p><div>",
        effect: "ani-dialog-3dslit"
    });
});
````

### 3D Rotate Left

````html
<button class="kuma-button kuma-button-lorange" id="button11">3D Rotate Bottom</button>
````

````javascript
seajs.use(['$', 'dialog'], function($, Dialog){
    new Dialog({
        trigger: "#button11",
        width: 500,
        content: "<div class='kuma-dialog-content'><div class='kuma-dialog-title'>I am title</div><p style='margin: 50px 30px;'>I am body.</p><div>",
        effect: "ani-dialog-3drotateleft"
    });
});
````