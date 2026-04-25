cd c:\Users\hp\Desktop\cake\3d-animation-site\components
rmdir /S /Q 3d
rmdir /S /Q sections
del Header.tsx
del ScrollImageSequence.tsx
cd c:\Users\hp\Desktop\cake
git add .
git commit -m "cleanup: remove unused components causing build errors"
git push -u origin main
