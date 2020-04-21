import os

from PIL import Image


image2 = Image.open('pixel.jpg'):
image2.convert(mode='L').save('pixel_mod.jpg')

size_500 = (500,500)
for f in os.listdir('.'):
  if f.endswitch('.jpg'):
    i = Image.open(f)
    fn, fext = os.path.splitext(f)
    i.thumbnail(size_500)
    i.save('500/{}_500()'.format(fn, fext))
  
    print fext