# Quick Start Guide - Structure Alignment Feature

## 🚀 Running the Extension

### Step 1: Launch the Extension
1. Press **`F5`** in VS Code, OR
2. Go to **Run → Start Debugging**, OR  
3. Click the **Run and Debug** icon (left sidebar) → Select "Run Extension" → Click the green play button

### Step 2: Test Window Opens
- A new VS Code window will open labeled **"[Extension Development Host]"**
- This is your test environment - use THIS window to test the extension

### Step 3: Open the Protein Viewer
In the Extension Development Host window:
1. Press **`Ctrl+Shift+P`** (Windows/Linux) or **`Cmd+Shift+P`** (Mac)
2. Type: **"Open Nano Protein Viewer"**
3. Press Enter

OR

- Right-click on any PDB/CIF file in the Explorer
- Select **"Launch Nano Viewer from file(s)"**

## 🧬 Testing Structure Alignment

### Prerequisites
- You need **at least 2 PDB or CIF files** (preferably the same protein from different species)
- Example: `protein_human.pdb`, `protein_mouse.pdb`, `protein_rat.pdb`

### Steps:

1. **Load Multiple Structures**
   - Click the **"Load PDB Files"** button in the viewer
   - Select 2-5 PDB/CIF files
   - OR right-click multiple files in Explorer → "Launch Nano Viewer from file(s)"

2. **Access Structure Alignment Panel**
   - Look at the **left control panel** in the viewer
   - Scroll down to find the **"Structure Alignment"** section

3. **Select Reference Structure**
   - In the dropdown labeled **"Reference Structure"**, select one of your loaded files
   - This will be the structure all others align to

4. **Align Structures**
   - Click the **"Align Structures"** button
   - Wait for the alignment to complete (button will show "Aligning..." during processing)

5. **View Results**
   - **RMSD**: Shows average root-mean-square deviation
   - **Conserved Residues**: Count of 100% identical residues
   - **Variable Residues**: Count of differing residues
   - **Structure Toggles**: Show/hide individual structures
   - **Sequence Alignment**: View aligned sequences with color coding
     - 🟢 Green = Conserved (100% identical)
     - 🔴 Red/Pink = Variable (different)

6. **Export Results**
   - Click **"Export Conservation Analysis"** to download a CSV file
   - Contains conservation data and sequence alignment

## 🎯 Tips

- **Conserved regions** (green) are potential hotspots for cross-reactive binder design
- **Variable regions** (red) show species-specific differences
- Click on sequence positions to highlight in 3D (feature may need refinement)
- Use structure toggles to compare specific structures

## 🐛 Troubleshooting

**Extension doesn't launch?**
- Make sure you're pressing F5 in the MAIN VS Code window (not the Extension Development Host)
- Check the Debug Console for errors

**Alignment button is disabled?**
- Make sure you have at least 2 files loaded
- Select a reference structure from the dropdown

**Alignment fails?**
- Check browser console (F12 in the viewer) for errors
- Ensure PDB/CIF files are valid structure files
- Files should contain the same protein (or homologous proteins)

## 📝 Notes

- The extension works with PDB and mmCIF formats
- Maximum 5 structures recommended for performance
- Alignment uses hybrid method: sequence alignment → structural alignment
- Conservation is calculated at 100% sequence identity threshold

