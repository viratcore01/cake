cd c:\Users\hp\Desktop\cake
echo "Cleaning up..."
if exist .git rmdir /S /Q .git
echo "Creating new git repo..."
git init
echo "Adding files..."
git add .
echo "Committing..."
git commit -m "Initial commit of Velvet Crumb animation site"
git branch -M main
echo "Setting remote..."
git remote add origin https://github.com/viratcore01/cake.git
echo "Pushing..."
git push -u origin main --force
echo "Done!"
