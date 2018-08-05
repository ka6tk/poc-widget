#payment widget

this is a POC. widget for Payment wall.
br  

[demo](http://spectacular-payment.surge.sh/example/)


#### to integrate widget in your html

- step 1 <br/>
insert the script tag  at the bottom of your html
```html
<script type="text/javascript" async src="http://spectacular-payment.surge.sh/widget-bundle.js">
</script>
```
- step 2 <br/>
provide the configuration in your js
```javascript
 window.onload = function () {
        paywall.setConfig({
            amount:5,
            currency:"USD",
            key:"__YOUR_PAYMENTWALL__API_key__"
        })
    }
```
- step 3 <br/>
    your final html look almost like below one.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Payment : example </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>


<script type="text/javascript" src="http://spectacular-payment.surge.sh/widget-bundle.js">
</script>
<script type="text/javascript">
 window.onload = function () {
        paywall.setConfig({
            amount:5,
            currency:"USD",
            key:"__YOUR_PAYMENTWALL__API_key__"
        })
    }
</script>

</body>
</html>
```


🍷 Cheers, Thanks.
