export const mockServices = [
  {
    id: "s1",
    title: "Billing Software Development",
    description: "Enterprise-grade invoicing solutions with automated reconciliation, complex tax compliance, and recurring billing capabilities.",
    icon: "Layout"
  },
  {
    id: "s2",
    title: "Inventory Management",
    description: "Real-time stock tracking, automated procurement triggers, and intelligent supply chain optimization for multi-warehouse operations.",
    icon: "Activity"
  },
  {
    id: "s3",
    title: "Hotel & Restaurant POS",
    description: "Comprehensive management systems covering reservations, table management, instant KOT, and deep financial reporting.",
    icon: "ShoppingCart"
  },
  {
    id: "s4",
    title: "Multi-Branch Systems",
    description: "Centralized operational control across unlimited physical locations with synchronized data and unified analytics.",
    icon: "Globe"
  },
  {
    id: "s5",
    title: "E-commerce Integration",
    description: "High-performance digital storefronts seamlessly connected to your backend inventory and fulfillment networks.",
    icon: "TrendingUp"
  },
  {
    id: "s6",
    title: "Custom Business Solutions",
    description: "Bespoke software development engineered to eliminate data silos and automate your unique operational workflows.",
    icon: "Zap"
  }
];

export const mockDemos = [
  {
    id: "d1",
    title: "Retail POS System",
    description: "High-speed checkout architecture for supermarkets with offline capabilities.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717defa?auto=format&fit=crop&w=800&q=80",
    category: "Retail"
  },
  {
    id: "d2",
    title: "Distributor Dashboard",
    description: "Advanced B2B portal for wholesale inventory routing and dealer management.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    category: "Distribution"
  },
  {
    id: "d3",
    title: "Hospitality Suite",
    description: "Unified property management system for multi-chain hotel operations.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    category: "Hospitality"
  },
  {
    id: "d4",
    title: "F&B Control Center",
    description: "End-to-end restaurant software from digital menus to ingredient tracking.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    category: "Restaurant"
  },
  {
    id: "d5",
    title: "Service Operations",
    description: "Field service management with mobile technician dispatch and invoicing.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Service"
  },
  {
    id: "d6",
    title: "Enterprise ERP Hub",
    description: "Fully customized monolithic ERP replacement handling core business logic.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Enterprise"
  }
];

export const mockTestimonials = [
  {
    id: "t1",
    author: "Arjun Mehta",
    role: "Director of Operations",
    company: "National Supermarts",
    content: "The multi-branch management system completely transformed how we operate. We now have absolute real-time inventory visibility across our 45 retail locations.",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "t2",
    author: "Priya Sharma",
    role: "Chief Financial Officer",
    company: "Grand Hotel Chain",
    content: "Their custom billing architecture cut our end-of-month reconciliation time from days to literally minutes. It is the backbone of our scaling strategy.",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "t3",
    author: "Rajesh Kumar",
    role: "Supply Chain Head",
    company: "Apex Distributors",
    content: "We eliminated absolute data silos. The inventory synchronization between our 5 warehouses and the B2B portal is flawlessly accurate.",
    avatarUrl: "https://randomuser.me/api/portraits/men/68.jpg"
  }
];

export const mockPosts = [
  {
    id: "p1",
    title: "The Importance of Real-Time Inventory Control",
    slug: "real-time-inventory-control",
    excerpt: "Why scaling distributors need split-second warehouse visibility.",
    content: "<p>Full content goes here...</p>",
    coverImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
    category: "Inventory",
    createdAt: new Date().toISOString(),
    author: { name: "System Admin" }
  },
  {
    id: "p2",
    title: "Automating Multi-Branch Restaurant Operations",
    slug: "automating-multi-branch-restaurants",
    excerpt: "Strategies for unifying menus, stock, and staff across physical locations.",
    content: "<p>Full content goes here...</p>",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Hospitality",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    author: { name: "System Admin" }
  },
  {
    id: "p3",
    title: "Solving the Billing Compliance Challenge",
    slug: "billing-compliance-challenge",
    excerpt: "How custom tax engines prevent compliance leakage in B2B transactions.",
    content: "<p>Full content goes here...</p>",
    coverImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=800&q=80",
    category: "Billing",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    author: { name: "System Admin" }
  }
];
