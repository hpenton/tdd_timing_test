# TDD vs non TDD time test

THIS 100% CONTAINS A MASSIVE AMOUNT OF OPINIONS please please tell me if you think any/all of them are wrong or want to discuss them. I'm still very new to the TDD world.

TL;DR listen to your Uncle Bob, he's been about a bit

## Intro

Cast your mind back to last year. I was a young naive developer sitting in a room with Shaun and Alan. Shaun had recently watched a video by *Uncle Bob* on TDD and had asked myself and another developer to write a dashboard project in a test driven way. I was proudly showing this project to Alan... his comment? *Welcome to 2008*. Probably the most valuable bit of career advice I've had so far.

## Hesitance

I was really enjoying writing this project in TDD, with the exception of one thing, **MOCKS OH GOD MOCKS**. They stopped me from writing any projects for the next half year in TDD.

Don't think about them. Yes they're important. But a 90% tested system that skipped some mocks is better than giving up on a TDD approach because of them. But don't skip the mocks, the attitude towards helping people that I've experienced at Worth around helping others unblock their problems is one I find charming and encouraging, and I know  that there is someone who can and wants to help with your mocks.

## A test

With that in mind, I felt I would begin to address one of the main complaints I've heard time and time again about TDD. It's slowwwwww.

I set myself the challenge of writing part of a Markdown parser that could convert headings in markdown to headings in html. I would write this both ways. While I was at it, I shot the test driven approach in the foot, by putting it first (i.e. I'd already had a go at this by the time I came to the other approach).

### Rules of the test

- The test does not include setting up of environment as this is irrelevant of process used to write code
- Both tests will implement class structures, but outside of that solutions to the issue are not restrained by any criteria 
- Both implementations will be timed from the moment the first file relevant to the solution is created
- Both implementations must have a parse function from which the below defined test can be run.
- With relation to the above point - a test exists in both implementations. It checks that when the parse function is called with the markdown input string the html output is received. This test passing is seen as the moment the clock can be stopped.

### Definition of done

The parser must be able to take headings of level 1 to 6, (i.e. # - ######) and parse them into <h1> to <h6>

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

### Results of the Test

TDD took me approx 40 mins

Non TDD took me approx 48 mins

## Analysis of results

Is the difference of 8 minutes a massive amount of time? Yes and no. Build it up over time and its massive, but I noticed something very important whilst carrying out this test.

Its not the amount of time it takes that matters. It doesn't matter in the slightest. The only importance of time in this instance is to invalidate the claim of 'TDD is slower'.

The reasons it actually matters are:

- I enjoyed myself more doing it test driven.
- I relied on console logging whilst writing the tests - these are just **expectations** evaluated by me, a human that makes evaluates things differently every time rather than by a computer, that thing that's really good at binary evaluations...
- I felt lost
- I didn't trust what I'd written
- My code didn't catch me when I came to change something

## An argument  - 'Yeah - write tests but not TDD' + a conclusion

I've also heard the suggestion that 'yeah of course tests are important, but I write them afterwards, so that I get the speed of not doing TDD + a tested program.

This test showed an increase in speed of ~20%. Is that a reliable value? Heck no. But we should make it one by rerunning better more refined versions of this test, even if speed isn't the main benefit of TDD. What this test does show, though, is that the figures are at least in the same ballpark. So why would you write loose tests that sit on top of an already implemented system rather than tests which are tightly knitted to units of work. That wasn't something I understood till I felt tests catch me.

Not to mention, if the untested approach being slower does ring true, this has probably increased the amount of time it takes to write a unit of code enough for it to matter.

### What do I mean by tests catching me?

Change something in an untested system with lots of parts and the only thing you have to rely on to update all the relevant parts, is your memory. Tests are the literal definition of those relevant parts, the ones that go red, are the bits of your program that need updating. Done.

## Problems with this test that can be addressed in future

Did I split the code out into logical functions when I did the test driven approach? No probably not, I was thinking too much about the time aspect of things. As I mentioned, I don't really see the timing aspect as being that important. I think further iterations of this test should focus more on creating the two solutions and then comparing their quality. Timing will be a natural bi-product of this.

I'd like to make this an ongoing project. A dimension of testing I would find it interesting to add would be to return to code written x amount of time ago and change it in both implementations.

## Summary

Write tests. Do it as you go. Ask for help.
