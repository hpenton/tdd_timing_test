# Definition of done

- The parser must be able to take headings of level 1 to 6, (i.e. # - ######) and parse them into ```<h1> to <h6>```
  - There must be a space between the hash and the text. Otherwise it is just text.
  - The parser must be able to eliminate spaces before the hash

At the end of the test the programs input string of 

```javascript
 # Heading one
##Heading two
### Heading three
#### Heading four
##### Headng five
###### Heading six

```

Must have an output string of

```html
<h1>
	Heading one
</h1>
<p>
  ##Heading two
</p>
<h3>
  Heading three
</h3>
<h4>
  Heading four
</h4>
<h5>
  Heading five
</h5>
<h6>
  Heading six
</h6>

```



# Test outline

- The test does not include setting up of environment as this is irrelevant of process used to write code
- Both tests will implement class structures, but outside of that solutions to the issue are not restrained by any criteria 
- Both implementations will be timed from the moment the first file relevant to the solution is created
- Both implementations must have a parse function from which the above defined test can be run.
- With relation to the above point - a test exists in both implementations. It checks that when the parse function is called with the markdown input string the html output is received

40 mins vs 48 mins