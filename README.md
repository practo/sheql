![alt text](https://raw.githubusercontent.com/practo/sheql/master/public/images/scheql.png)

#Tools
1. Javascript
2. Nodejs/Express
3. Karma Unit testing - TDD

#Features

1. Far More powerful than google cal.
2. Schemaless Storage.
3. Single update to repeated events.
4. Platform independent.
5. ZERO infrastructure.

#Rules


**ELEMENTS** ``` y, m, w, d ```

**CLASSES**

    y.leap

    m.jan, .feb ...., .31d, 30d, 28d, 29d

    w

    d.sat.mon .10, .11, .23

    precedence: LEFT -> RIGHT

**Selectors for Date manipulation**

**Yearly repeated on the 45th day**

```css
y d:n[45] _1700
```

**Monthly 1st sat**

```css
m d.sat:n[1] _2100
```

**Monthly 2nd sat**

```css
m d.sat:n[2] _1600
```
**Monthly second day if is a sat**

```css
m d:n[2].sat _2100
```

**monthly last sat**

```css
m d.sat:l[1] _1800
```
**monthly second last sat**

```css
m d.sat:l[2] _1800
```

**monthly all sat**

```css
m d.sat _1400
```
**every 3rd months 2nd sat**

```css
m:n[3n] d.sat:n[2] _1300
```
**every 1st of every month**

```css
m d:n[1] _1800
```
**Every alternate month second week, first mondays**

```css
m:n[2n] w:n[2] d.mon _1700
```
**Every alternate month second monday**

```css
m:n[2n] d.mon:n[2]
```
**23rd of each month**

```css
m d:n[23] _1800
```
**100th day of each year**

```css
y d:n[100] _1500
```
**14th Feb every yr**

```css
y m:n[1] d:n[14]
y m.feb d:n[14]
```
**Every 20th day**

```css
d:n[20n]
```
**every month  12th day**

```css
m d:n[12]
```
**every mar-dec weekdays**

```css
y m:n[-n+3] d:n[n+1]:n[-n+1]
```
**every month first sat after 12th**

```css
m d.sat:n[n+12, 1]    /*NOT SUPPORTED AS OF NOW*/
```
**every month alternate days after 12th**

```css
m d:n[n+12, 2n]   /*NOT SUPPORTED AS OF NOW*/
```
**4th april 2016**

```css
_040420160800;        /*NOT SUPPORTED AS OF NOW*/
```
**31st day is tuesday**

```css
m d:n[31].tue
```
**Every month's third sat is 18th**

```css
m d.sat:n[3].18
```
**sat of a month if it is 10th**

```css
m d.sat.10
```
**15 days from the third mon of a month**

```css
m d.mon:n[3]:n[n+1,n+15](2) /*NOT SUPPORTED AS OF NOW*/
m d.mon:n[3]~d:n[n+15](3)   /*NOT SUPPORTED*/
```

**All days in a month except fridays**
```css
m d!fri  /*NOT SUPPORTED AS OF NOW*/
```