---
sidebar_position: 2
title: Setup
---

import Highlight from '@site/src/components/Highlight';
import TipBox from '@site/src/components/TipBox';
import ProgressTracker from '@site/src/components/ProgressTracker';

# Setup Elven

This section guides you through installing and configuring Elven on your system, whether running locally or self-hosting on a server.

<TipBox>
Make sure your system meets the minimum requirements before starting the installation.
</TipBox>

---

## Prerequisites

- Node.js (version 16 or higher)  
- npm or yarn package manager  
- Basic command line knowledge  

---

## Installation Steps

1. Clone the Elven repository or download the latest release.  
2. Run `npm install` or `yarn` in the project directory to install dependencies.  
3. Configure your environment variables as needed (see next section).  
4. Start the development server using `npm start` or `yarn start`.  
5. Access Elven at `http://localhost:3000` in your browser.

---

## Configuration

Create a `.env` file in the root with key settings, for example:
PORT=3000
DB_URI=mongodb://localhost/elven



Modify these values based on your hosting environment.

<Highlight>
For self-hosted deployments, ensure your firewall rules allow traffic on your chosen port.
</Highlight>

---

<ProgressTracker
  steps={['Overview', 'Setup', 'Features', 'Deploy', 'Develop']}
  currentStep={1}
/>

---

Ready to proceed? Next, check out the **Features** section to learn about Elven's capabilities.
