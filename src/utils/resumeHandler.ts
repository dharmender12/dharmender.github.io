import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_LIST, CERTIFICATIONS, ACHIEVEMENTS, PROJECTS } from '../data/resumeData';

/**
 * Generates an official PDF resume for Dharmender Thakur using jsPDF,
 * opens it in a new tab, and automatically triggers download.
 */
export function handleDownloadAndOpenResume(): void {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 15;

    // Helper functions for PDF styling
    const addHeader = () => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(20, 20, 30);
      doc.text(PERSONAL_INFO.name, pageWidth / 2, y, { align: 'center' });
      y += 7;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.setTextColor(50, 100, 180);
      doc.text(PERSONAL_INFO.title, pageWidth / 2, y, { align: 'center' });
      y += 6;

      doc.setFontSize(9);
      doc.setTextColor(80, 80, 90);
      const contactLine = `${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.location} | GitHub: dharmender12`;
      doc.text(contactLine, pageWidth / 2, y, { align: 'center' });
      y += 8;

      // Divider line
      doc.setDrawColor(200, 210, 225);
      doc.setLineWidth(0.5);
      doc.line(15, y, pageWidth - 15, y);
      y += 6;
    };

    const addSectionTitle = (title: string) => {
      if (y > 260) {
        doc.addPage();
        y = 15;
      }
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(20, 40, 90);
      doc.text(title.toUpperCase(), 15, y);
      y += 2;
      doc.setDrawColor(50, 100, 180);
      doc.setLineWidth(0.4);
      doc.line(15, y, pageWidth - 15, y);
      y += 5;
    };

    // Build PDF Document
    addHeader();

    // Professional Summary
    addSectionTitle('Professional Summary');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(40, 40, 40);
    const summaryLines = doc.splitTextToSize(PERSONAL_INFO.summary, pageWidth - 30);
    doc.text(summaryLines, 15, y);
    y += summaryLines.length * 4.5 + 4;

    // Professional Experience
    addSectionTitle('Professional Experience');
    EXPERIENCES.forEach((exp) => {
      if (y > 250) {
        doc.addPage();
        y = 15;
      }
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(20, 20, 30);
      doc.text(exp.role, 15, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(90, 90, 100);
      doc.text(`${exp.period} | ${exp.location}`, pageWidth - 15, y, { align: 'right' });
      y += 4.5;

      doc.setFont('helvetica', 'italic');
      doc.setTextColor(50, 80, 150);
      doc.text(`${exp.company}${exp.program ? ' (' + exp.program + ')' : ''}`, 15, y);
      y += 5;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(40, 40, 40);
      doc.setFontSize(8.5);

      exp.highlights.forEach((bullet) => {
        if (y > 270) {
          doc.addPage();
          y = 15;
        }
        const bulletLines = doc.splitTextToSize(`• ${bullet}`, pageWidth - 35);
        doc.text(bulletLines, 18, y);
        y += bulletLines.length * 3.8 + 1;
      });
      y += 3;
    });

    // Education
    addSectionTitle('Education');
    EDUCATION_LIST.forEach((edu) => {
      if (y > 265) {
        doc.addPage();
        y = 15;
      }
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(20, 20, 30);
      doc.text(edu.degree, 15, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(90, 90, 100);
      doc.text(`${edu.period} | ${edu.location}`, pageWidth - 15, y, { align: 'right' });
      y += 4;

      doc.setFont('helvetica', 'italic');
      doc.setTextColor(60, 60, 70);
      doc.text(edu.institution, 15, y);
      y += 5;
    });

    // Key Projects
    addSectionTitle('Key Projects');
    PROJECTS.forEach((proj) => {
      if (y > 260) {
        doc.addPage();
        y = 15;
      }
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(20, 30, 80);
      doc.text(`${proj.title} - ${proj.subtitle}`, 15, y);
      y += 4;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(50, 50, 50);
      const projLines = doc.splitTextToSize(proj.longDescription, pageWidth - 30);
      doc.text(projLines, 15, y);
      y += projLines.length * 3.8 + 2;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(40, 100, 160);
      doc.text(`Tech: ${proj.techStack.join(', ')} | Demo: ${proj.liveUrl}`, 15, y);
      y += 5;
    });

    // Certifications & Leadership
    addSectionTitle('Certifications & Achievements');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 40);
    doc.text('Certifications:', 15, y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    CERTIFICATIONS.forEach((cert) => {
      if (y > 270) {
        doc.addPage();
        y = 15;
      }
      doc.text(`• ${cert.title} — ${cert.issuer}`, 18, y);
      y += 4;
    });
    y += 2;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('Achievements & Leadership:', 15, y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    ACHIEVEMENTS.forEach((ach) => {
      if (y > 270) {
        doc.addPage();
        y = 15;
      }
      doc.text(`• ${ach.role} – ${ach.event} (${ach.organization}) [${ach.period}]`, 18, y);
      y += 4;
    });

    // Convert to Blob
    const blob = doc.output('blob');
    const blobUrl = URL.createObjectURL(blob);

    // 1. ALWAYS Open in a new tab
    const newTab = window.open(blobUrl, '_blank');
    if (!newTab) {
      // Fallback if popup blocked
      window.location.assign(blobUrl);
    }

    // 2. ALWAYS Automatically trigger download
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'Dharmender_Thakur_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (error) {
    console.error('Error generating PDF resume:', error);
    // Fallback: Create text blob and open
    const fallbackText = `${PERSONAL_INFO.name}\n${PERSONAL_INFO.title}\n${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}\n\nSummary:\n${PERSONAL_INFO.summary}\n\nGitHub: ${PERSONAL_INFO.github}`;
    const blob = new Blob([fallbackText], { type: 'text/plain' });
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank');
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'Dharmender_Thakur_Resume.txt';
    link.click();
  }
}
