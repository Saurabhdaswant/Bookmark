# layout stucture

## header

header : twoChild = logo + nav > fourChild

## hero

hero : twoChild : about + heroImg
about : threeChild = heading + text + CTA : two button
heroImg : maybe has two img

## Features

features : heading + text | threeFeatures
threeFeatures - has three features links which onclick shows the img and detail of the particular feature

threeFeatures : topNav > threeChild + bottomDetail > featureImg + Detail > heading + text + showMoreBtn

## DownLoad the Extension

DTE : head > heading + text with main > threCards
threCards : contect + cta
contect : img + 3 + p

## FAQ

FAQ : heading + text + accordian with moreInfo btn

## Footer

fotter : p + heading + input + btn

fuck this

5 CSS Techniques That Gary simon Use the MOST!

1. creating whitespace with ease using vw

div{
  margin:10vw;
  padding:10vw;
}

 fluid everything maybe🤐

div{
  margin:2em;
  fontSize:1.3rem;
}

html{
  fontSize:16px;
}
now change only the html fontsize on diffreent media querry

 fluid any element i think this is what i was searching for 😱

div{
font-size:clamp(min, preferred,max)
}

learn clip path and clamp from ours trully