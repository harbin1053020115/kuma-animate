# kuma-button动画

---

<link rel="stylesheet" href="https://s.tbcdn.cn/g/alinw/kuma-button/2.1.1/kuma-button.css" />
<link rel="stylesheet" href="//g.alicdn.com/platform/common/s/1.1/global/global.css" />
<link rel="stylesheet" href="../src/kuma-animate.css" />
<style type="text/css">
    a:focus, a:hover{
        text-decoration: none;
    }

    .button-cont{
        position: relative;
        z-index: 1;
        margin: 10px 0;
    }
</style>

## Button Hover Effect

### Basic Transition

````html
<div class="button-cont">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-hover">Button</button>
    <button class="kuma-button kuma-button-lwhite kuma-button-ani-hover">Button</button>
    <button class="kuma-button kuma-button-lorange kuma-button-ani-hover">Button</button>
</div>
````

### Background Transition

#### Slide Down

````html
<div class="button-cont">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-hover down">Button</button>
    <button class="kuma-button kuma-button-lwhite kuma-button-ani-hover down">Button</button>
    <button class="kuma-button kuma-button-lorange kuma-button-ani-hover down">Button</button>
</div>
````

#### Slide Up

````html
<div class="button-cont">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-hover up">Button</button>
    <button class="kuma-button kuma-button-lwhite kuma-button-ani-hover up">Button</button>
    <button class="kuma-button kuma-button-lorange kuma-button-ani-hover up">Button</button>
</div>
````

#### Slide Left

````html
<div class="button-cont">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-hover left">Button</button>
    <button class="kuma-button kuma-button-lwhite kuma-button-ani-hover left">Button</button>
    <button class="kuma-button kuma-button-lorange kuma-button-ani-hover left">Button</button>
</div>
````

#### Slide Right

````html
<div class="button-cont">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-hover right">Button</button>
    <button class="kuma-button kuma-button-lwhite kuma-button-ani-hover right">Button</button>
    <button class="kuma-button kuma-button-lorange kuma-button-ani-hover right">Button</button>
</div>
````

#### Slide Horizontal

````html
<div class="button-cont">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-hover slideH">Button</button>
    <button class="kuma-button kuma-button-lwhite kuma-button-ani-hover slideH">Button</button>
    <button class="kuma-button kuma-button-lorange kuma-button-ani-hover slideH">Button</button>
</div>
````

##### Slide Vertical

````html
<div class="button-cont">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-hover slideV">Button</button>
    <button class="kuma-button kuma-button-lwhite kuma-button-ani-hover slideV">Button</button>
    <button class="kuma-button kuma-button-lorange kuma-button-ani-hover slideV">Button</button>
</div>
````

### Icon Transition

#### Slide Down

````html
<div class="button-cont">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-icon down">
        <i class="kuma-icon kuma-icon-download"></i>
        <span>下载</span>
    </button>
    <button class="kuma-button kuma-button-lwhite kuma-button-ani-icon down">
        <i class="kuma-icon kuma-icon-download"></i>
        <span>下载</span>
    </button>
    <button class="kuma-button kuma-button-lorange kuma-button-ani-icon down">
        <i class="kuma-icon kuma-icon-download"></i>
        <span>下载</span>
    </button>
</div>
````

#### Slide Up

````html
<div class="button-cont">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-icon up">
        <i class="kuma-icon kuma-icon-uploading"></i>
        <span>上传</span>
    </button>
    <button class="kuma-button kuma-button-lwhite kuma-button-ani-icon up">
        <i class="kuma-icon kuma-icon-uploading"></i>
        <span>上传</span>
    </button>
    <button class="kuma-button kuma-button-lorange kuma-button-ani-icon up">
        <i class="kuma-icon kuma-icon-uploading"></i>
        <span>上传</span>
    </button>
</div>
````

#### Slide Left

````html
<div class="button-cont">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-icon left">
        <i class="kuma-icon kuma-icon-chevron-left"></i>
        <span>左滑</span>
    </button>
    <button class="kuma-button kuma-button-lwhite kuma-button-ani-icon left">
        <i class="kuma-icon kuma-icon-chevron-left"></i>
        <span>左滑</span>
    </button>
    <button class="kuma-button kuma-button-lorange kuma-button-ani-icon left">
        <i class="kuma-icon kuma-icon-chevron-left"></i>
        <span>左滑</span>
    </button>
</div>
````

#### Slide Right

````html
<div class="button-cont">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-icon right">
        <i class="kuma-icon kuma-icon-chevron-right"></i>
        <span>右滑</span>
    </button>
    <button class="kuma-button kuma-button-lwhite kuma-button-ani-icon right">
        <i class="kuma-icon kuma-icon-chevron-right"></i>
        <span>右滑</span>
    </button>
    <button class="kuma-button kuma-button-lorange kuma-button-ani-icon right">
        <i class="kuma-icon kuma-icon-chevron-right"></i>
        <span>右滑</span>
    </button>
</div>
````

### 3D Transition

#### Rotate Down

````html
<div class="button-cont perspective">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-3d down">
        Rotate Down
        <span class="success">It Works!</span>
    </button>
</div>
````

#### Rotate Up

````html
<div class="button-cont perspective">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-3d up">
        Rotate Up
        <span class="error">Error!</span>
    </button>
</div>
````

#### Rotate Left

````html
<div class="button-cont perspective">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-3d left">
        Rotate Left
        <span class="info">Info!</span>
    </button>
</div>
````
#### Rotate Right

````html
<div class="button-cont perspective">
    <button class="kuma-button kuma-button-lblue kuma-button-ani-3d right">
        Rorate Right
        <span class="warning">Warning!</span>
    </button>
</div>
````