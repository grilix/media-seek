#MediaSeek

Really simple markers for video and audio tags.

##Use cases

If you have an audio or video which is a compilation,
or if you just have identified some interesting points
in a video, you can add markers so others can click and
go directly there!

##How to use

Include your media file, in the standard way

```html
<audio id="media" controls="controls">
  <source src="some talk.m4a" />
</audio>
```

Include the time list you want your users to navigate

```html
<ul id="seek">
  <li><span class="time">0:30</span> The fun starts here.</li>
  <li><span class="time">1:13</span> Someone asks a good question about the sun.</li>
  <li><span class="time">4:28</span> He starts talking about coffe.</li>
  <li><span class="time">8:39</span> Really awkward question.</li>
  <li><span class="time">14:33</span> A really good point about office.</li>
</ul>
```

Include the javascript magic

```html
<script src="src/MediaSeek.js"></script>
<script>
var media = document.getElementById("media"),
    seek = document.getElementById("seek"),
    seeker = new MediaSeek(media, seek);

// You can attach extra seek lists
seeker.attachSeek(bloopersList);
</script>
```

##Contribute

If want to help, it will be always appreciated. If you just want say something,
it could also be helpful.

Cheers.
