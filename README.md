![alt text](https://raw.githubusercontent.com/practo/sheql/master/public/images/scheql.png)

#Features

1. Far More powerful than google calender.
2. Schemaless Architecture.
3. Single change required to update repeated events.
4. Platform independent.
5. ZERO infrastructure.

#Finalized Rules


##ELEMENTS
Year: `y`

Month: `m`

Week: `w`

Day: `d`


##CLASSES

**Years** `y.leap`


**Months** `m.jan`, `m.feb` ...., `m.31d`, `m.30d`, `m.28d`, `m.29d`

**Days** `d.sat`,  `d.mon`,  `d.10`, `d.11`, `d.23`


##Examples

**Yearly repeated on the 45th day**

```css
y d:n[45]
```

**Monthly 1st sat**

```css
m d.sat:n[1]
```

**Monthly 2nd day if it's a sat**

```css
m d:n[2].sat
```

**monthly last sat**

```css
m d.sat:l[1]
```
**monthly second last sat**

```css
m d.sat:l[2]
```

**monthly all sat**

```css
m d.sat
```
**every 3rd months 2nd sat**

```css
m:n[3x] d.sat:n[2]
```
**every 1st of every month**

```css
m d:n[1]
```
**Every alternate month second week, first mondays**

```css
m:n[2x] w:n[2] d.mon
```
**Every alternate month second monday**

```css
m:n[2x] d.mon:n[2]
```
**23rd of each month**

```css
m d:n[23]
```
**100th day of each year**

```css
y d:n[100]
```
**14th Feb every yr**

```css
y m:n[1] d:n[14]
y m.feb d:n[14]
```
**Every 20th day**

```css
d:n[20x]
```
**every month  12th day**

```css
m d:n[12]
```
**every mar-dec weekdays**

```css
y m:n[-x+3] d:n[x+1]:n[-x+1]
```

**2006, 2012 and 2004's alternate month's saturdays **
```css
y#2006, y#2012, y#2004{
    & m:n[2x] d.sat
}
```



**every month first sat after 12th**

```css
m d:n[x+12]~d.sat[1]    /*NOT SUPPORTED AS OF NOW*/
```
**every month alternate days after 12th**

```css
m d:n[x+12]~d.sat[2x]   /*NOT SUPPORTED AS OF NOW*/
```
**4th april 2016**

```css
;        /*NOT SUPPORTED AS OF NOW*/
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