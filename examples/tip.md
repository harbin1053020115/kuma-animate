# alinw/tip动画

---

<link rel="stylesheet" href="//g.alicdn.com/platform/common/s/1.1/global/global.css" />
<link rel="stylesheet" href="https://alinw.alicdn.com/alinw/tip/2.0.6/tip.css" />
<link rel="stylesheet" href="../src/kuma-animate.css" />
<style type="text/css">
    .kuma-button-cont{
        margin: 20px auto;
    }
</style>

## Tip Animation Effects

> 注意：alinw/tip@2.2.4版本开始支持动画，如果需要使用动画，请先升级alinw/tip版本号

### slideIn

````html
<div class="kuma-button-cont">
    <button class="kuma-button kuma-button-lorange" id="slideInBtn">slideIn</button>
</div>
````

````javascript
seajs.use(['$', 'tip'], function($, Tip){
    new Tip({
        trigger: '#slideInBtn',
        inViewport: true,
        effect: "ani-tip-slideIn",
        content: "<h3>This is a tip.</h3><p>不要去羡慕人家的地位，或者人家还羡慕你的健康呢。</p><p>许我们现在面临的是经济欠缺，或者我们面临的是疾病缠绕。</p>"
    });
});
````

### flipIn

````html
<div class="kuma-button-cont">
    <button class="kuma-button kuma-button-lorange" id="flipInBtn">flipIn</button>
</div>
````

````javascript
seajs.use(['$', 'tip'], function($, Tip){
    new Tip({
        trigger: '#flipInBtn',
        inViewport: true,
        effect: "ani-tip-flipIn",
        content: "<h3>This is a tip.</h3><p>不要去羡慕人家的地位，或者人家还羡慕你的健康呢。</p><p>许我们现在面临的是经济欠缺，或者我们面临的是疾病缠绕。</p>"
    });
});
````

### cropIn

````html
<div class="kuma-button-cont">
    <button class="kuma-button kuma-button-lorange" id="cropInBtn">cropIn</button>
</div>
````

````javascript
seajs.use(['$', 'tip'], function($, Tip){
    new Tip({
        trigger: '#cropInBtn',
        inViewport: true,
        effect: "ani-tip-cropIn",
        content: "<h3>This is a tip.</h3><p>不要去羡慕人家的地位，或者人家还羡慕你的健康呢。</p><p>许我们现在面临的是经济欠缺，或者我们面临的是疾病缠绕。</p>"
    });
});
````

### scale

````html
<div class="kuma-button-cont">
    <button class="kuma-button kuma-button-lorange" id="scaleBtn">scale</button>
</div>
````

````javascript
seajs.use(['$', 'tip'], function($, Tip){
    new Tip({
        trigger: '#scaleBtn',
        inViewport: true,
        effect: "ani-tip-scale",
        content: "<h3>This is a scale tip.</h3><p>不要去羡慕人家的地位，或者人家还羡慕你的健康呢。</p><p>许我们现在面临的是经济欠缺，或者我们面临的是疾病缠绕。</p>"
    });
});
````

### 其他

也可以从常用动画类中提取动画效果用于Tip动画

````html
<div class="kuma-button-cont">
    <button class="kuma-button kuma-button-lorange" id="bounceBtn">scale</button>
</div>
````

````javascript
seajs.use(['$', 'tip'], function($, Tip){
    new Tip({
        trigger: '#bounceBtn',
        inViewport: true,
        effect: "ani-bounce",
        content: "<h3>This is a scale tip.</h3><p>不要去羡慕人家的地位，或者人家还羡慕你的健康呢。</p><p>许我们现在面临的是经济欠缺，或者我们面临的是疾病缠绕。</p>"
    });
});
````