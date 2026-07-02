/**
 * Portal Latihan Soal Statistika - Application Logic
 * Implements dashboard rendering, tab navigation, theme toggling,
 * interactive SVG Boxplot, and statistical calculators.
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initDashboard();
  initExams();
  initCalculators();
  
  // Render boxplot if active page has the container
  setTimeout(renderBoxplot, 200);
});

/* ==========================================================================
   Theme Toggling (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "dark";
  
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);
  
  themeToggle.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    let newTheme = theme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
    
    // Re-render boxplot to adjust coordinate grids for new theme colors
    renderBoxplot();
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#theme-toggle i");
  if (theme === "dark") {
    icon.className = "fas fa-sun";
  } else {
    icon.className = "fas fa-moon";
  }
}

/* ==========================================================================
   Sidebar & Tab Navigation
   ========================================================================== */
function initNavigation() {
  const navItems = document.querySelectorAll(".nav-menu .nav-item");
  const sections = document.querySelectorAll(".content-section");
  const menuTrigger = document.getElementById("menu-trigger");
  const sidebar = document.querySelector(".sidebar");
  
  // Handle tab switching
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetTab = item.getAttribute("data-tab");
      
      navItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      
      sections.forEach(sec => {
        sec.style.display = "none";
        if (sec.id === `${targetTab}-section`) {
          sec.style.display = "flex";
        }
      });
      
      // Update page title
      const pageTitle = document.querySelector(".page-title h2");
      if (targetTab === "dashboard") pageTitle.innerText = "Dashboard Utama";
      else if (targetTab === "uts") pageTitle.innerText = "Materi & Latihan Soal UTS";
      else if (targetTab === "uas") pageTitle.innerText = "Materi & Latihan Soal UAS";
      else if (targetTab === "playground") pageTitle.innerText = "Playground & Kalkulator Statistika";
      
      // Close sidebar on mobile after clicking
      if (window.innerWidth <= 1024) {
        sidebar.classList.remove("open");
        const triggerIcon = menuTrigger.querySelector("i");
        triggerIcon.className = "fas fa-bars";
      }
      
      // Render components if needed
      if (targetTab === "uts") {
        setTimeout(renderBoxplot, 100);
      }
      
      // Scroll to top of main content
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  
  // Mobile sidebar trigger
  menuTrigger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    const icon = menuTrigger.querySelector("i");
    if (sidebar.classList.contains("open")) {
      icon.className = "fas fa-times";
    } else {
      icon.className = "fas fa-bars";
    }
  });
  
  // Handle window resizing
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      sidebar.classList.remove("open");
      const icon = menuTrigger.querySelector("i");
      icon.className = "fas fa-bars";
    }
  });
}

/* ==========================================================================
   Dashboard Renderer
   ========================================================================== */
function initDashboard() {
  const pdfGrid = document.getElementById("pdf-grid");
  pdfGrid.innerHTML = "";
  
  EXAMS_DATA.forEach(exam => {
    const card = document.createElement("div");
    card.className = "pdf-card";
    
    // Different badge colors for UTS and UAS
    const categoryBadge = exam.category === "uts" 
      ? '<span class="badge badge-success">UTS</span>' 
      : '<span class="badge badge-info">UAS</span>';
      
    card.innerHTML = `
      <div class="pdf-card-icon">
        <i class="far fa-file-pdf"></i>
      </div>
      <div class="pdf-card-info">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.25rem;">
          <h4>${exam.title}</h4>
          ${categoryBadge}
        </div>
        <p>${exam.fileName}</p>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top:0.5rem; line-height: 1.4;">
          ${exam.description.substring(0, 95)}...
        </p>
      </div>
      <div class="pdf-actions">
        <a href="${exam.fileName}" class="btn btn-secondary" download>
          <i class="fas fa-download"></i> Download
        </a>
        <button class="btn btn-primary" onclick="openExamTab('${exam.category}', '${exam.id}')">
          <i class="fas fa-eye"></i> Pelajari Soal
        </button>
      </div>
    `;
    pdfGrid.appendChild(card);
  });
  
  // Search feature logic
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    
    // Filter questions inside UTS and UAS sections
    document.querySelectorAll(".question-card").forEach(card => {
      const title = card.querySelector(".question-materi").innerText.toLowerCase();
      const content = card.querySelector(".question-content").innerText.toLowerCase();
      
      if (title.includes(query) || content.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Global action to switch tabs from card buttons
window.openExamTab = function(category, examId) {
  const navItem = document.querySelector(`.nav-menu .nav-item[data-tab="${category}"]`);
  if (navItem) {
    navItem.click();
    
    // Scroll directly to the target exam
    setTimeout(() => {
      const element = document.getElementById(examId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Expand the first question of that exam automatically
        const firstQuestionCard = element.nextElementSibling;
        if (firstQuestionCard && firstQuestionCard.classList.contains("question-card")) {
          if (!firstQuestionCard.classList.contains("active")) {
            firstQuestionCard.querySelector(".question-header").click();
          }
        }
      }
    }, 200);
  }
};

/* ==========================================================================
   Exam Sections Renderer (UTS / UAS Panels)
   ========================================================================== */
function initExams() {
  const utsSection = document.getElementById("uts-section");
  const uasSection = document.getElementById("uas-section");
  
  // Separate exam data into UTS and UAS lists
  const utsExams = EXAMS_DATA.filter(e => e.category === "uts");
  const uasExams = EXAMS_DATA.filter(e => e.category === "uas");
  
  renderExamGroup(utsExams, utsSection);
  renderExamGroup(uasExams, uasSection);
}

function renderExamGroup(exams, containerSection) {
  // Clear any placeholder
  containerSection.innerHTML = "";
  
  exams.forEach(exam => {
    const examWrapper = document.createElement("div");
    examWrapper.className = "exam-section";
    examWrapper.style.width = "100%";
    
    // Header for this exam paper
    const examHeader = document.createElement("div");
    examHeader.className = "exam-header-widget";
    examHeader.id = exam.id;
    examHeader.innerHTML = `
      <h3>${exam.title}</h3>
      <p style="margin-bottom: 0.5rem;"><strong>File Sumber:</strong> <a href="${exam.fileName}" target="_blank" style="color:var(--primary); text-decoration:none;"><i class="far fa-file-pdf"></i> ${exam.fileName}</a></p>
      <p>${exam.description}</p>
    `;
    examWrapper.appendChild(examHeader);
    
    // Append questions
    exam.questions.forEach(q => {
      const qCard = document.createElement("div");
      qCard.className = "question-card";
      qCard.id = q.id;
      
      qCard.innerHTML = `
        <div class="question-header">
          <div class="question-meta">
            <span class="question-badge">Soal ${q.number}</span>
            <span class="question-materi">${q.materi}</span>
            <span class="question-score">${q.poin} Poin</span>
          </div>
          <div class="expand-icon"><i class="fas fa-chevron-down"></i></div>
        </div>
        <div class="question-body">
          <div class="question-content">
            ${q.questionHtml}
          </div>
          <div class="solution-container">
            <div class="solution-label">
              <i class="fas fa-lightbulb"></i> Langkah Pengerjaan & Jawaban
            </div>
            <div class="solution-content">
              ${q.solutionHtml}
            </div>
          </div>
        </div>
      `;
      
      // Click event to expand/collapse
      const qHeader = qCard.querySelector(".question-header");
      qHeader.addEventListener("click", () => {
        const isActive = qCard.classList.contains("active");
        
        // Collapse all other cards in this exam wrapper
        examWrapper.querySelectorAll(".question-card").forEach(c => {
          c.classList.remove("active");
          c.querySelector(".question-body").style.maxHeight = null;
        });
        
        if (!isActive) {
          qCard.classList.add("active");
          const qBody = qCard.querySelector(".question-body");
          qBody.style.maxHeight = qBody.scrollHeight + 100 + "px";
          
          // Re-render LaTeX math equations if MathJax or KaTeX is active
          if (window.renderMathInElement) {
            window.renderMathInElement(qBody, {
              delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "\\[", right: "\\]", display: true},
                {left: "$", right: "$", display: false},
                {left: "\\(", right: "\\)", display: false}
              ]
            });
          }
        }
      });
      
      examWrapper.appendChild(qCard);
    });
    
    containerSection.appendChild(examWrapper);
  });
}

/* ==========================================================================
   SVG Dynamic Boxplot Drawing
   ========================================================================== */
function renderBoxplot() {
  const container = document.getElementById("interactive-boxplot");
  if (!container) return;
  
  container.innerHTML = "";
  
  // Boxplot Dimensions
  const width = 420;
  const height = 360;
  const margin = { top: 30, right: 120, bottom: 40, left: 60 };
  
  // Data values
  const minVal = 22;
  const q1Val = 52;
  const medVal = 62;
  const q3Val = 82;
  const maxVal = 96;
  
  // Value mapping function: maps 0-100 to y coordinates (height-margin.bottom to margin.top)
  const scaleY = (val) => {
    const plotHeight = height - margin.top - margin.bottom;
    return height - margin.bottom - (val / 100) * plotHeight;
  };
  
  // Center X coordinate for the boxplot elements
  const centerX = (width - margin.left - margin.right) / 2 + margin.left + 30;
  const boxWidth = 90;
  
  // Create SVG Element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", height);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  
  // Grid Lines and Y-Axis Scale
  for (let i = 0; i <= 100; i += 10) {
    const y = scaleY(i);
    
    // Grid Line
    const grid = document.createElementNS("http://www.w3.org/2000/svg", "line");
    grid.setAttribute("x1", margin.left);
    grid.setAttribute("y1", y);
    grid.setAttribute("x2", width - margin.right + 20);
    grid.setAttribute("y2", y);
    grid.setAttribute("class", "boxplot-grid-line");
    svg.appendChild(grid);
    
    // Scale Label
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", margin.left - 15);
    text.setAttribute("y", y + 4);
    text.setAttribute("text-anchor", "end");
    text.setAttribute("font-size", "11");
    text.setAttribute("fill", "var(--text-muted)");
    text.setAttribute("font-family", "Outfit");
    text.textContent = i;
    svg.appendChild(text);
  }
  
  // Y-axis title
  const axisTitle = document.createElementNS("http://www.w3.org/2000/svg", "text");
  axisTitle.setAttribute("x", 15);
  axisTitle.setAttribute("y", height / 2);
  axisTitle.setAttribute("transform", `rotate(-90, 15, ${height/2})`);
  axisTitle.setAttribute("text-anchor", "middle");
  axisTitle.setAttribute("font-size", "11");
  axisTitle.setAttribute("fill", "var(--text-muted)");
  axisTitle.setAttribute("font-weight", "600");
  axisTitle.textContent = "Nilai Mahasiswa";
  svg.appendChild(axisTitle);
  
  // Boxplot Whiskers (Vertical Lines)
  // Lower whisker (Q1 to Min)
  const whiskerLow = document.createElementNS("http://www.w3.org/2000/svg", "line");
  whiskerLow.setAttribute("x1", centerX);
  whiskerLow.setAttribute("y1", scaleY(q1Val));
  whiskerLow.setAttribute("x2", centerX);
  whiskerLow.setAttribute("y2", scaleY(minVal));
  whiskerLow.setAttribute("class", "boxplot-whisker");
  svg.appendChild(whiskerLow);
  
  // Upper whisker (Q3 to Max)
  const whiskerHigh = document.createElementNS("http://www.w3.org/2000/svg", "line");
  whiskerHigh.setAttribute("x1", centerX);
  whiskerHigh.setAttribute("y1", scaleY(q3Val));
  whiskerHigh.setAttribute("x2", centerX);
  whiskerHigh.setAttribute("y2", scaleY(maxVal));
  whiskerHigh.setAttribute("class", "boxplot-whisker");
  svg.appendChild(whiskerHigh);
  
  // Box Rectangle (Q1 to Q3)
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", centerX - boxWidth / 2);
  rect.setAttribute("y", scaleY(q3Val));
  rect.setAttribute("width", boxWidth);
  rect.setAttribute("height", scaleY(q1Val) - scaleY(q3Val));
  rect.setAttribute("class", "boxplot-rect");
  rect.setAttribute("rx", "4");
  svg.appendChild(rect);
  
  // Boxplot Caps (Horizontal lines at Max & Min)
  // Max Cap
  const capMax = document.createElementNS("http://www.w3.org/2000/svg", "line");
  capMax.setAttribute("x1", centerX - boxWidth / 4);
  capMax.setAttribute("y1", scaleY(maxVal));
  capMax.setAttribute("x2", centerX + boxWidth / 4);
  capMax.setAttribute("y2", scaleY(maxVal));
  capMax.setAttribute("class", "boxplot-line");
  svg.appendChild(capMax);
  
  // Min Cap
  const capMin = document.createElementNS("http://www.w3.org/2000/svg", "line");
  capMin.setAttribute("x1", centerX - boxWidth / 4);
  capMin.setAttribute("y1", scaleY(minVal));
  capMin.setAttribute("x2", centerX + boxWidth / 4);
  capMin.setAttribute("y2", scaleY(minVal));
  capMin.setAttribute("class", "boxplot-line");
  svg.appendChild(capMin);
  
  // Median Line
  const medianLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  medianLine.setAttribute("x1", centerX - boxWidth / 2);
  medianLine.setAttribute("y1", scaleY(medVal));
  medianLine.setAttribute("x2", centerX + boxWidth / 2);
  medianLine.setAttribute("y2", scaleY(medVal));
  medianLine.setAttribute("class", "boxplot-median");
  svg.appendChild(medianLine);
  
  // Hover Tooltip Container (HTML side)
  let tooltip = document.getElementById("boxplot-tooltip-widget");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "boxplot-tooltip-widget";
    tooltip.className = "boxplot-tooltip";
    document.body.appendChild(tooltip);
  }
  
  // Define statistical key points for interactive hover markers
  const keyPoints = [
    { label: "Nilai Maksimum (Max)", val: maxVal, desc: "Ujung Whisker Atas" },
    { label: "Kuartil 3 Atas (Q3)", val: q3Val, desc: "Sisi Atas Kotak (Persentil ke-75)" },
    { label: "Median / Kuartil 2 (Q2)", val: medVal, desc: "Nilai Tengah Data (Persentil ke-50)" },
    { label: "Kuartil 1 Bawah (Q1)", val: q1Val, desc: "Sisi Bawah Kotak (Persentil ke-25)" },
    { label: "Nilai Minimum (Min)", val: minVal, desc: "Ujung Whisker Bawah" }
  ];
  
  // Add hover points/labels on the right side of the graph
  keyPoints.forEach(pt => {
    const y = scaleY(pt.val);
    
    // Draw guide line from boxplot to text label
    const guide = document.createElementNS("http://www.w3.org/2000/svg", "line");
    guide.setAttribute("x1", centerX + boxWidth / 2 + 10);
    guide.setAttribute("y1", y);
    guide.setAttribute("x2", width - margin.right + 10);
    guide.setAttribute("y2", y);
    guide.setAttribute("stroke", "var(--primary)");
    guide.setAttribute("stroke-opacity", "0.2");
    guide.setAttribute("stroke-dasharray", "2 2");
    guide.setAttribute("class", "boxplot-hover-line");
    svg.appendChild(guide);
    
    // Label Text
    const textLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textLabel.setAttribute("x", width - margin.right + 15);
    textLabel.setAttribute("y", y + 4);
    textLabel.setAttribute("font-size", "11");
    textLabel.setAttribute("font-weight", pt.val === medVal ? "700" : "500");
    textLabel.setAttribute("fill", pt.val === medVal ? "var(--secondary)" : "var(--text-primary)");
    textLabel.setAttribute("font-family", "Outfit");
    textLabel.textContent = `${pt.label.split(" ")[0]} = ${pt.val}`;
    svg.appendChild(textLabel);
    
    // Dot on the box plot itself
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", centerX);
    dot.setAttribute("cy", y);
    dot.setAttribute("class", "boxplot-point");
    if (pt.val === medVal) {
      dot.setAttribute("fill", "var(--secondary)");
    }
    svg.appendChild(dot);
    
    // Wide transparent hover target area
    const hoverArea = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    hoverArea.setAttribute("x", centerX - boxWidth/2 - 10);
    hoverArea.setAttribute("y", y - 10);
    hoverArea.setAttribute("width", boxWidth + 20);
    hoverArea.setAttribute("height", 20);
    hoverArea.setAttribute("class", "boxplot-interactive-marker");
    
    // Tooltip mouse interactions
    hoverArea.addEventListener("mousemove", (e) => {
      tooltip.style.opacity = "1";
      tooltip.style.left = e.pageX + 15 + "px";
      tooltip.style.top = e.pageY - 15 + "px";
      tooltip.innerHTML = `
        <div style="font-weight:700; color:var(--primary);">${pt.label}</div>
        <div style="font-size:1.15rem; font-weight:800; margin: 2px 0;">Nilai: ${pt.val}</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">${pt.desc}</div>
      `;
    });
    
    hoverArea.addEventListener("mouseleave", () => {
      tooltip.style.opacity = "0";
    });
    
    svg.appendChild(hoverArea);
  });
  
  container.appendChild(svg);
}

/* ==========================================================================
   Calculators Playground Logic
   ========================================================================== */
function initCalculators() {
  // Binomial Inputs & Actions
  const binN = document.getElementById("bin-n");
  const binP = document.getElementById("bin-p");
  const binK = document.getElementById("bin-k");
  const binType = document.getElementById("bin-type");
  
  const binInputs = [binN, binP, binK, binType];
  binInputs.forEach(input => {
    if (input) input.addEventListener("input", calculateBinomial);
  });
  
  // Normal Inputs & Actions
  const normMean = document.getElementById("norm-mean");
  const normStd = document.getElementById("norm-std");
  const normX1 = document.getElementById("norm-x1");
  const normX2 = document.getElementById("norm-x2");
  const normType = document.getElementById("norm-type");
  
  const normInputs = [normMean, normStd, normX1, normX2, normType];
  normInputs.forEach(input => {
    if (input) input.addEventListener("input", calculateNormal);
  });
  
  // Trigger initial calculations
  calculateBinomial();
  calculateNormal();
}

/* Binomial Calculations Helpers */
function factorial(x) {
  if (x === 0 || x === 1) return 1;
  let res = 1;
  for (let i = 2; i <= x; i++) res *= i;
  return res;
}

function combinations(n, k) {
  if (k < 0 || k > n) return 0;
  return Math.round(factorial(n) / (factorial(k) * factorial(n - k)));
}

function binomialPmf(n, p, k) {
  return combinations(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

function calculateBinomial() {
  const n = parseInt(document.getElementById("bin-n").value);
  const p = parseFloat(document.getElementById("bin-p").value);
  const k = parseInt(document.getElementById("bin-k").value);
  const type = document.getElementById("bin-type").value;
  const resultVal = document.getElementById("bin-result-val");
  const resultSteps = document.getElementById("bin-result-steps");
  
  // Inputs validation
  if (isNaN(n) || isNaN(p) || isNaN(k) || n < 1 || p < 0 || p > 1 || k < 0 || k > n) {
    resultVal.innerText = "Input Error";
    resultSteps.innerHTML = "Pastikan: 0 &le; p &le; 1, dan 0 &le; k &le; n.";
    return;
  }
  
  let finalProb = 0;
  let formulaText = "";
  
  if (type === "exact") {
    finalProb = binomialPmf(n, p, k);
    const combs = combinations(n, k);
    formulaText = `
      <strong>Rumus:</strong> \\(P(X = ${k}) = C(${n}, ${k}) \\times ${p}^{${k}} \\times (1 - ${p})^{${n - k}}\\)<br>
      <strong>Substitusi:</strong> \\(P(X = ${k}) = ${combs} \\times ${p.toFixed(4)}^{${k}} \\times ${(1-p).toFixed(4)}^{${n - k}}\\)<br>
      <strong>Langkah:</strong> \\(${combs} \\times ${Math.pow(p, k).toFixed(6)} \\times ${Math.pow(1 - p, n - k).toFixed(6)}\\)
    `;
  } else if (type === "atmost") {
    for (let i = 0; i <= k; i++) {
      finalProb += binomialPmf(n, p, i);
    }
    let terms = [];
    for (let i = 0; i <= Math.min(k, 3); i++) {
      terms.push(`P(X=${i})`);
    }
    if (k > 3) terms.push("...");
    formulaText = `
      <strong>Rumus:</strong> \\(P(X \\le ${k}) = \\sum_{i=0}^{${k}} P(X = i)\\)<br>
      <strong>Penjabaran:</strong> \\(${terms.join(" + ")}\\)<br>
      <strong>Hasil Penjumlahan:</strong> \\(${finalProb.toFixed(5)}\\)
    `;
  } else if (type === "atleast") {
    for (let i = k; i <= n; i++) {
      finalProb += binomialPmf(n, p, i);
    }
    let terms = [];
    for (let i = k; i <= Math.min(n, k + 2); i++) {
      terms.push(`P(X=${i})`);
    }
    if (n > k + 2) terms.push("...");
    formulaText = `
      <strong>Rumus:</strong> \\(P(X \\ge ${k}) = \\sum_{i=${k}}^{${n}} P(X = i)\\)<br>
      <strong>Penjabaran:</strong> \\(${terms.join(" + ")}\\)<br>
      <strong>Hasil Penjumlahan:</strong> \\(${finalProb.toFixed(5)}\\)
    `;
  }
  
  resultVal.innerText = finalProb.toFixed(5);
  resultSteps.innerHTML = formulaText;
  
  // Re-run KaTeX formatting inside the result box
  if (window.renderMathInElement) {
    window.renderMathInElement(resultSteps);
  }
}

/* Normal Distribution Calculation Helpers */
// High-precision approximation for cumulative normal distribution function
function cumulativeNormalCdf(x, mean, std) {
  let z = (x - mean) / std;
  let t = 1 / (1 + 0.2316419 * Math.abs(z));
  let d = 0.39894228 * Math.exp(-z * z / 2);
  let p = d * t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  if (z > 0) return 1 - p;
  return p;
}

function calculateNormal() {
  const mean = parseFloat(document.getElementById("norm-mean").value);
  const std = parseFloat(document.getElementById("norm-std").value);
  const x1 = parseFloat(document.getElementById("norm-x1").value);
  const x2Input = document.getElementById("norm-x2");
  const x2 = parseFloat(x2Input.value);
  const type = document.getElementById("norm-type").value;
  const resultVal = document.getElementById("norm-result-val");
  const resultSteps = document.getElementById("norm-result-steps");
  
  // Toggle Visibility of X2 Input based on selection
  const x2Group = document.getElementById("norm-x2-group");
  if (type === "between") {
    x2Group.style.display = "flex";
  } else {
    x2Group.style.display = "none";
  }
  
  // Inputs validation
  if (isNaN(mean) || isNaN(std) || isNaN(x1) || std <= 0 || (type === "between" && isNaN(x2))) {
    resultVal.innerText = "Input Error";
    resultSteps.innerHTML = "Pastikan Nilai Standar Deviasi (\\(\\sigma\\)) > 0.";
    if (window.renderMathInElement) window.renderMathInElement(resultSteps);
    return;
  }
  
  let finalProb = 0;
  let formulaText = "";
  const z1 = (x1 - mean) / std;
  
  if (type === "less") {
    finalProb = cumulativeNormalCdf(x1, mean, std);
    formulaText = `
      <strong>Standardisasi:</strong> \\(Z = \\frac{${x1} - ${mean}}{${std}} = ${z1.toFixed(3)}\\)<br>
      <strong>Rumus:</strong> \\(P(X < ${x1}) = P(Z < ${z1.toFixed(2)})\\)<br>
      <strong>Nilai Tabel Z:</strong> Area kumulatif kiri untuk \\(Z = ${z1.toFixed(2)}\\) adalah \\(${finalProb.toFixed(4)}\\)
    `;
  } else if (type === "greater") {
    finalProb = 1 - cumulativeNormalCdf(x1, mean, std);
    formulaText = `
      <strong>Standardisasi:</strong> \\(Z = \\frac{${x1} - ${mean}}{${std}} = ${z1.toFixed(3)}\\)<br>
      <strong>Rumus:</strong> \\(P(X > ${x1}) = P(Z > ${z1.toFixed(2)}) = 1 - P(Z \\le ${z1.toFixed(2)})\\)<br>
      <strong>Substitusi:</strong> \\(1 - ${(1 - finalProb).toFixed(4)} = ${finalProb.toFixed(4)}\\)
    `;
  } else if (type === "between") {
    if (x1 > x2) {
      resultVal.innerText = "X1 > X2 Error";
      resultSteps.innerHTML = "Batas bawah X1 harus lebih kecil daripada batas atas X2.";
      return;
    }
    const z2 = (x2 - mean) / std;
    const p1 = cumulativeNormalCdf(x1, mean, std);
    const p2 = cumulativeNormalCdf(x2, mean, std);
    finalProb = p2 - p1;
    formulaText = `
      <strong>Standardisasi:</strong> <br>
      \\(Z_1 = \\frac{${x1} - ${mean}}{${std}} = ${z1.toFixed(3)}\\) <br>
      \\(Z_2 = \\frac{${x2} - ${mean}}{${std}} = ${z2.toFixed(3)}\\) <br>
      <strong>Rumus:</strong> \\(P(${x1} < X < ${x2}) = P(${z1.toFixed(2)} < Z < ${z2.toFixed(2)}) = P(Z < ${z2.toFixed(2)}) - P(Z < ${z1.toFixed(2)})\\)<br>
      <strong>Substitusi:</strong> \\(${p2.toFixed(4)} - ${p1.toFixed(4)} = ${finalProb.toFixed(4)}\\)
    `;
  }
  
  resultVal.innerText = finalProb.toFixed(5);
  resultSteps.innerHTML = formulaText;
  
  // Re-run KaTeX formatting
  if (window.renderMathInElement) {
    window.renderMathInElement(resultSteps);
  }
}
