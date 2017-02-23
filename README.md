401 JS --  Lab 36 and beyond crud
===

## Working with firebase
  * I feel that firebase is much easier to work with and very straightforward. Of course each has its nuances and differences but I do feel the authentication through firebase is very useful.


## Resources  
* [firebase admin sdk docs](https://firebase.google.com/docs/admin/setup)
* [firebase sdk docs](https://firebase.google.com/docs/web/setup)




####  before
* ::before is a pseudo element which allows you to insert content onto a page from CSS (without it needing to be in the HTML). While the end result is not actually in the DOM, it appears on the page as if it is. ::before inserts the content before any other content in the HTML instead of after. The only reasons to use one over the other are:

#### after
* ::after is a pseudo element which allows you to insert content onto a page from CSS (without it needing to be in the HTML). While the end result is not actually in the DOM, it appears on the page as if it is. ::after content is also "after" in source-order, so it will position on top of ::before if stacked on top of each other naturally.
## Static  
* Static. This is the default for every single page element. Different elements don't have different default values for positioning, they all start out as static. Static doesn't mean much, it just means that the element will flow into the page as it normally would. The only reason you would ever set an element to position: static is to forcefully-remove some positioning that got applied to an element outside of your control.

## relative
* Relative. This type of positioning is probably the most confusing and misused. What it really means is "relative to itself". If you set position: relative; on an element but no other positioning attributes (top, left, bottom or right), it will no effect on it's positioning at all, it will be exactly as it would be if you left it as position: static; But if you DO give it some other positioning attribute, say, top: 10px;, it will shift it's position 10 pixels DOWN from where it would NORMALLY be.

## absolute
* Absolute. This is a very powerful type of positioning that allows you to literally place any page element exactly where you want it. You use the positioning attributes top, left bottom and right to set the location. Remember that these values will be relative to the next parent element with relative (or absolute) positioning. If there is no such parent, it will default all the way back up to the <html> element itself meaning it will be placed relatively to the page itself.

## Fixed
* Fixed. This type of positioning is fairly rare but certainly has its uses. A fixed position element is positioned relative to the viewport, or the browser window itself.


# inline
* display:inline makes the element create inline-boxes which basically means that dimensions don't apply and vertical margins no longer work. Vertical padding can be added but cannot increase the height of the element greater than it's line height and so may overlap subsequent lines.

# block
* display: block the element will span the full width of the space available to it. (a line break before and after the element)

# inline-block
* If you have display:inline-block;, you get a block that sits in the middle of a paragraph. Within that block, you can set a specific height, you can have text wrapping onto several lines. The best analogy I can think of is in MS Word, where you have a picture that is set to "in line with text". It can be particularly useful when lining up several blocks side-by-side, where you don't want to use float on actual blocks.
















__...-=--=-=--=---=---=-..__
.,--~                            ~~--.._
'                .,;;!!!!!!!;;,,,.       `--._
       ;;!!'`.,,,,.````````'''>>;;,     `-._
    ;!!!'' ,`..`"$$$c,`"$$$$$cccc,.` .,,,.  `-.
   <!!` c"' z$P"  `""??h= "$$$$$$P =???$$$,    `-
 ;!!! d$$ccJ".d$$$$$hc ?$$$,,.  .,,.""=c $       `-.
<!!!! $$$$F ,,      ""h $$$$$F-?????$$c,            `.
,c.`!!',$$$$ ?$$        $ 3$$$F        ,."              `
.c$$$ :! <$$$$L "$L     ,c$ d$$$F        J$$'              `.
$$$$$ `!>`$$$$$$c,`"????"",cP?$$L  ==ccc$$P'                 `.
$$$$$c !'<$$$$$$$$$hccccd$$$L;$$$h  c,,.,cc                    `.
?$$$$',! J$$$$$$$$$$$$$$$$$$$$P"",c,`$$$$$$h                     :
"$$' <'4$$$$$$$$$$$$$$$$$$$$$F,$$$$,$$$$$$$L.                    :
;;!'.$$$$$$$$$$$$$$$$$$$$$$hcc:hh$$$$$$$$$$                     \
'!!! $$$$$$$$$$$$$$F"????????"""""?$$$$$$$$$L                     \
!! 4$$$$$$$$$$$$L,c  .,,,,,,,,,,. ?$$$$$$$$$                      `.
!>.$$$$$$$$$$$$$$$$L   `````````  J$$$$$$$$$.                       \
!>`$$$$$$$$$$$$$$$$$$ `  ```````  J$$$$$$$$$'                       ;
'!! $$$$$$$$$$$$$$$$$$$$$$$$$ccccc??$$$$$$$$$                     . z$
<!! $$$$$$$$$$$$$$$$$$$$$$$cccccccc$$$$$$$$$$                   d$F.$$
!!! 3$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$       ;;;;!!!!!! ,$P"4$$
!!! `$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ,;!!!!!!!!!'' ,xnnnn "'.
!!!! $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$P"?$$$$$$$ !!!!!!!'',xdMMMMMMP ;!!!
;!!!!>`$$$$$$$$$$$$$$$$$$$$$$$$$$$$ chc`3$$$$F,!'''',nnMMMMMMMP" ;!!!!!
<!!!!! ?$$$$$$$$$$$$$$$$$$$$$$$$$$$hcccJ$$$P" ,nMMMMMMMMMMMMP ;!!!!!!!!
!!!!!!> "$$$$$$$$$$$$$$$$$$$$$$$$$$$$P""",xnMMMMMMMPPP"""'.  <!!!!!!!!!
;!!!!!!!!; "?$$$$$$$$$$$$$$$$$P""'.,nmdMMM??"""..;;;;<!!!!!' <!!!!!!!!!
!!!!!!!!!!!;,.`""???$$$??""',,nn????"""...;;!'!!!!!!!!!!!!` <!!!!!!!!! ,
!!!!!!!!!!!!!!!!''`...-='"...;;>-''``.    ;;  !!!!!!!!!! .<!!!!!!!!!! ,M
'!!!!!!!!''``  ,-='"..;;;!''``..;;.    -'   ' !!!!!!!!!! ;!!!!!!!!!!' dMP
''``..;;;;;!!'`  -```  .> `' ` ` ``' `..; ;!> !!!!!!!!' ;!!!!!!!!!!',MMM
!!!!!!!!!!!!!! ; ''''' ''  -   <; --' ''''```..!!!!!!!' !!!!!!!!!!' uMM" J
'''.,xmnmmr `!> > >'..>  '  `.,;;;!!!!!!!!!!!!!!!!!!' ;!!!!!!!!!!',dMP uMM
MMMMMPP"""  ;!! `  .,,;;!!!!!!!!!!''''''''''''!!!!! ;!!!!!!!!!!! uMMP MMMM
MMM",ndMMP  <!!!!!!!!!!!!!''``.,nmnMMMMMMMMMM !!!! <!!!!!!!!!!! uMMP dMMMM
" ,dMMMMMB  !!!!!!!'' .   .,,,,. "44MMMMMMMM' !!!!!!!!!!!!!!!! uMMP dMMMMM
4MMMP").r' !!!!'.,nP ,dMMMMMMMMMMb, 4MMMMM';!!!!!!!!!!!!!!!' JMP',dMMMMMM
4MP nMMM' '!!! uMMP MMMMMMMMMMMMMMMM,`MMM' !!!!!!!!!!!!!!! ;MMP dMMMMMMMM
.,nMP".,= !!!! MMM dMMMMMMMMMMMMMMMMM M" ;!!!!!!!!!!!!!!! nMM".dMMMMMMMMM
MMMMM'- ;!!!!!!!!!!!!!!!' dMP ;MMMMMMMMMMM
,ndP".;!!!!!!!!!!;; `4MMMMMMMMMMMMMP' ;<!!!!!!!!!!!!!!! -P" ,dMMMMMMMMMMMM
"',;!!!!!!!!!!!!!!!!>;.`"4MMMMMMP" ;!!!!!!!!!!!!!!!'` ,xndMMMMMMMMMMMMMMMM
!!!!!!!!!!!!!!!!!!!!!!!!!;;,..,,;<!!!!!!!!!!!''''.,nMMMMMMMMMMMMMMMMMMMMMM
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' ,xnnMMMMMMMMMMMMMMMMMMMMMMMMMMMM
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'''.,,xn,`"4MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
!!!!!!!!!!!!!!!!!!!!!!!!!'''.,xnnMMMMMMMMMMn,`4MMMMMMMMMMMMMMMMMMMMMMMMMMM
!!!!!!!!!!!!!!!!!!!!!''` -dMMMMMMMMMMMMMMMMMMM,"4MMMMMMMMMMMMMMMMMMMMMMMMM
```''!!!!!!''''''.,,nMMMMx "MMMMMMMMMMMMMMMMMMMMx.""44MMMMMMMMMMMMMMMMMMMM
MMMmn,..,xmnmdMMMMMMMMMMMMMnx."4MMMMMMMMMMMMMMMMMMMMn.`"4MMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMb,."4MMMMMMMMMMMMMMMMMMMMMx."4MMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMbx."44MMMMMMMMMMMMMMMMMMMMx "4MMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMn.""4MMMMMMMMMMMMMMMMMMbx "4MMMMMMMM
