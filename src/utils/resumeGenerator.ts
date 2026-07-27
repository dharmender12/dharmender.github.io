import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_LIST, SKILL_CATEGORIES, CERTIFICATIONS, ACHIEVEMENTS } from '../data/resumeData';

export function generateResumePDF(): jsPDF {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;
  let y = 45;

  const checkPageBreak = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      y = 40;
    }
  };

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(20, 20, 30);
  doc.text(PERSONAL_INFO.name, pageWidth / 2, y, { align: 'center' });
  y += 18;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(70, 70, 90);
  doc.text(PERSONAL_INFO.title, pageWidth / 2, y, { align: 'center' });
  y += 16;

  doc.setFontSize(9.5);
  doc.setTextColor(80, 80, 100);
  const contactText = `${PERSONAL_INFO.email}  |  ${PERSONAL_INFO.phone}  |  ${PERSONAL_INFO.location}  |  LinkedIn  |  GitHub`;
  doc.text(contactText, pageWidth / 2, y, { align: 'center' });
  y += 18;

  // Horizontal Rule
  doc.setDrawColor(200, 200, 215);
  doc.setLineWidth(1);
  doc.line(margin, y, pageWidth - margin, y);
  y += 18;

  // Section: PROFESSIONAL SUMMARY
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(20, 30, 60);
  doc.text('PROFESSIONAL SUMMARY', margin, y);
  y += 6;
  doc.setLineWidth(0.5);
  doc.setDrawColor(30, 40, 80);
  doc.line(margin, y, pageWidth - margin, y);
  y += 12;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(50, 50, 60);
  const summaryLines = doc.splitTextToSize(PERSONAL_INFO.summary, pageWidth - margin * 2);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 12 + 10;

  // Section: PROFESSIONAL EXPERIENCE
  checkPageBreak(80);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(20, 30, 60);
  doc.text('PROFESSIONAL EXPERIENCE', margin, y);
  y += 6;
  doc.line(margin, y, pageWidth - margin, y);
  y += 14;

  EXPERIENCES.forEach((exp) => {
    checkPageBreak(70);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(20, 20, 30);
    doc.text(exp.role, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(90, 90, 100);
    doc.text(`${exp.period} | ${exp.location}`, pageWidth - margin, y, { align: 'right' });
    y += 12;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9.5);
    doc.setTextColor(60, 60, 80);
    const companyTitle = exp.program ? `${exp.company} (${exp.program})` : exp.company;
    doc.text(companyTitle, margin, y);
    y += 14;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(50, 50, 60);
    exp.highlights.forEach((hl) => {
      checkPageBreak(25);
      const hlLines = doc.splitTextToSize(`• ${hl}`, pageWidth - margin * 2 - 10);
      doc.text(hlLines, margin + 5, y);
      y += hlLines.length * 11 + 3;
    });
    y += 6;
  });

  // Section: EDUCATION
  checkPageBreak(80);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(20, 30, 60);
  doc.text('EDUCATION', margin, y);
  y += 6;
  doc.line(margin, y, pageWidth - margin, y);
  y += 14;

  EDUCATION_LIST.forEach((edu) => {
    checkPageBreak(30);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 30);
    doc.text(edu.degree, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(90, 90, 100);
    doc.text(`${edu.period} | ${edu.location}`, pageWidth - margin, y, { align: 'right' });
    y += 12;

    doc.setFont('helvetica', 'italic');
    doc.setTextColor(70, 70, 80);
    doc.text(edu.institution, margin, y);
    y += 14;
  });

  // Section: TECHNICAL & SOFT SKILLS
  checkPageBreak(100);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(20, 30, 60);
  doc.text('CORE TECHNICAL & SOFT SKILLS', margin, y);
  y += 6;
  doc.line(margin, y, pageWidth - margin, y);
  y += 14;

  SKILL_CATEGORIES.forEach((cat) => {
    checkPageBreak(35);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(30, 40, 70);
    doc.text(`${cat.name}:`, margin, y);
    y += 12;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(50, 50, 60);
    const skillsListStr = cat.skills.map((s) => s.name).join(' • ');
    const skillLines = doc.splitTextToSize(skillsListStr, pageWidth - margin * 2 - 10);
    doc.text(skillLines, margin + 5, y);
    y += skillLines.length * 11 + 6;
  });

  // Section: CERTIFICATIONS & ACHIEVEMENTS
  checkPageBreak(80);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(20, 30, 60);
  doc.text('CERTIFICATIONS & LEADERSHIP', margin, y);
  y += 6;
  doc.line(margin, y, pageWidth - margin, y);
  y += 14;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(50, 50, 60);
  CERTIFICATIONS.forEach((cert) => {
    checkPageBreak(15);
    doc.text(`• ${cert.title} — ${cert.issuer}`, margin + 5, y);
    y += 12;
  });
  y += 6;

  ACHIEVEMENTS.forEach((ach) => {
    checkPageBreak(15);
    doc.text(`• ${ach.role} – ${ach.event} (${ach.organization}) | ${ach.period}`, margin + 5, y);
    y += 12;
  });

  return doc;
}

/**
 * Executes the requirement:
 * - Opens resume in a NEW TAB
 * - AND automatically downloads the resume PDF file
 */
export function handleResumeAction(): void {
  const doc = generateResumePDF();
  const pdfBlob = doc.output('blob');
  const blobUrl = URL.createObjectURL(pdfBlob);

  // 1. Open in new tab
  window.open(blobUrl, '_blank');

  // 2. Trigger automatic download
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = 'Dharmender_Thakur_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
