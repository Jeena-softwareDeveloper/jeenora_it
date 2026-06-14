const fs = require('fs');
const path = require('path');

const files = [
  'app/(website)/page.tsx',
  'app/(website)/demos/page.tsx',
  'app/(website)/pricing/page.tsx',
  'app/(website)/blog/page.tsx',
  'app/(website)/blog/[slug]/page.tsx',
  'app/(website)/contact/page.tsx',
  'app/(website)/about/page.tsx',
  'app/(website)/layout.tsx',

  'app/(admin)/dashboard/page.tsx',
  'app/(admin)/leads/page.tsx',
  'app/(admin)/demos/page.tsx',
  'app/(admin)/services/page.tsx',
  'app/(admin)/testimonials/page.tsx',
  'app/(admin)/blog/page.tsx',
  'app/(admin)/contacts/page.tsx',
  'app/(admin)/settings/page.tsx',
  'app/(admin)/seo/page.tsx',
  'app/(admin)/layout.tsx',

  'app/api/auth/[...nextauth]/route.ts',
  'app/api/leads/route.ts',
  'app/api/demos/route.ts',
  'app/api/services/route.ts',
  'app/api/testimonials/route.ts',
  'app/api/blog/route.ts',
  'app/api/contacts/route.ts',
  'app/api/settings/route.ts',
  'app/api/upload/route.ts',

  'lib/prisma.ts',
  'lib/auth.ts',
  'lib/cloudinary.ts',
  'lib/email.ts',
];

const componentsDirs = [
  'components/website',
  'components/admin',
  'components/ui'
];

componentsDirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, dir), { recursive: true });
});

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  
  let content = '';
  if (file.endsWith('page.tsx')) {
    const name = file.split('/').filter(p => !p.startsWith('(') && !p.startsWith('[')).join('_').replace('.tsx', '');
    content = `export default function Page() {\n  return <div className="p-8">${name} Page</div>;\n}\n`;
  } else if (file.endsWith('layout.tsx')) {
    content = `export default function Layout({ children }: { children: React.ReactNode }) {\n  return <div>{children}</div>;\n}\n`;
  } else if (file.endsWith('route.ts')) {
    content = `import { NextResponse } from 'next/server';\n\nexport async function GET() {\n  return NextResponse.json({ message: 'Hello' });\n}\n`;
  } else {
    content = `// ${file}\n`;
  }
  
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content);
  }
});

// Remove default page.tsx from app root if it exists
if (fs.existsSync(path.join(__dirname, 'app/page.tsx'))) {
  fs.unlinkSync(path.join(__dirname, 'app/page.tsx'));
}

console.log('Folder structure created.');
