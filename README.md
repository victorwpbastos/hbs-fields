# hbs-fields

> A collection of [Handlebars](http://handlebarsjs.com) html form helpers.

## Install

1. Download the `hbs-fields` folder;
2. If you are using [Boiler](https://github.com/baltazzar/boiler), put the `hbs-fields` folder inside the `application/helpers` folder. Create the `helpers` folder if it not exists.

## How to use

Use it like a Handlebars helper:

### Input
```handlebars
{{input name="nome"}}
```

### Select
```handlebars
{{#select name="hasKids" label="Have kids?"}}
  <option value="true">Yes</option>
  <option value="false">No</option>
{{/select}}
```

### Checkbox
```handlebars
<label>Choose a car:</label>
<br>
{{checkbox name="car" label="VW" value="vw"}}
{{checkbox name="car" label="GM" value="gm"}}
```

### Radio
```handlebars
<label>Gender:</label>
<br>
{{radio name="gender" label="Male" value="m"}}
{{radio name="gender" label="Female" value="f"}}
```

### Textarea
```handlebars
{{textarea name="nome" rows="2"}}
```

#### Observations:
1. You can pass any valid html attributes as parameters;
2. If you pass the `name` attribute, the `id` attribute would be the same, unless you pass the `id` too.


## Custom parameters
If you're using [Bootstrap](http://getbootstrap.com/) you can pass the parameter `cols="n"`, where `n` is the [number of columns](http://getbootstrap.com/css/#grid) that the field should occupy.

In `checkbox` and `radio` you can pass the parameter `inline=true` to indicate that the this field should be renderized [inline](http://getbootstrap.com/css/#inline-checkboxes-and-radios).
