
let nx; let ny; let tm = 0;

function setup()
{
    if (windowWidth > 600) { createCanvas(windowWidth,windowHeight); }
    else { noCanvas(); } noSmooth(); noCursor(); frameRate(60);

    toby = loadImage('https://jaelee083.github.io/interview/8.gif');
}

function draw()
{
    let ww = windowWidth; let wh = windowHeight; tm += 1; clear();

    let sh = select('.sh'); let lh = select('.lh'); let ah = select('.ah');
    let ph = select('.ph'); let gh = select('.gh'); let fh = select('.fh');
    let n  = select('.n');

    background(0,0,0,0); scale(3); noStroke(); imageMode(CENTER);

    // player spawn

    if (tm < 2) { nx = 44; ny = 77; }

    // player controls

    if (keyIsDown(UP_ARROW))    { ny -= 1; }
    if (keyIsDown(DOWN_ARROW))  { ny += 1; }
    if (keyIsDown(LEFT_ARROW))  { nx += 1; }
    if (keyIsDown(RIGHT_ARROW)) { nx -= 1; }

    // window boundaries

    if (ww > 1400)
    { if (nx < 0 - round(ww/6.29) + 7) { nx = 0 - round(ww/6.29) + 7; }}

    if (ww <= 1400 && ww > 1100)
    { if (nx < 0 - round(ww/6.29) + 9) { nx = 0 - round(ww/6.29) + 9; }}

    if (ww <= 1100 && ww > 900) 
    { if (nx < 0 - round(ww/6.29) + 11) { nx = 0 - round(ww/6.29) + 11; }}

    if (ww <= 900) 
    { if (nx < 0 - round(ww/6.29) + 13) { nx = 0 - round(ww/6.29) + 13; }}
    
    if (nx > 0 - round(ww/-6.035) - 12) { nx = 0 - round(ww/-6.035) - 12; }

    if (ny < 11) { ny = 11; } if (ny > round(wh/3) - 17) { ny = round(wh/3) - 17; }

    // player image

    image(toby,round(ww/6) - nx,ny,22,19);

    // map layers

    if (ny > 171) { sh.style('z-index', '1'); } if (ny <= 171) { sh.style('z-index', '2'); }
    if (ny > 167) { lh.style('z-index', '1'); } if (ny <= 167) { lh.style('z-index', '1'); }
    if (ny > 103) { ah.style('z-index', '1'); } if (ny <= 103) { ah.style('z-index', '2'); }
    if (ny >  99) { ph.style('z-index', '1'); } if (ny <=  99) { ph.style('z-index', '2'); }
    if (ny > 137) { gh.style('z-index', '1'); } if (ny <= 137) { gh.style('z-index', '2'); }
    if (ny > 161) { fh.style('z-index', '1'); } if (ny <= 161) { fh.style('z-index', '2'); }

    if (ny > 35) { n.style('z-index', '1'); } if (ny <= 35) { n.style('z-index', '2'); }

    // debug

    // fill(255); textSize(8); fill(50);
    // text(nx,5,12); text(ny,5,22);
}

function windowResized()
{
    resizeCanvas(windowWidth,windowHeight);
}