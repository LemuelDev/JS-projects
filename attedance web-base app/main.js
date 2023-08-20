const infoTechBtn = document.querySelector('.infoTechBtn');
const fisheriesBtn = document.querySelector('.fisheriesBtn');
const attendance = document.querySelector('.attendance');
const attendanceFisheries = document.querySelector('.attendanceFisheries');
const hideBtn = document.querySelectorAll('.hideBtn')
const selectBtn = document.querySelectorAll('.selectbtn')
const selectFishBtn = document.querySelectorAll('.selectFishbtn')
const sheetContent = document.querySelector('.sheet-content')

function showAttendance() {
    let sheetAttendanceContainer = document.createElement('div')
    const yearSection = ['BSIT - 1', 'BSIT - 2', 'BSIT - 3', 'BSIT - 4' ]
    if (this.innerHTML.trim() === yearSection[0]) {
                sheetAttendanceContainer.innerHTML = `
                <div class="sheet-attendance">
                        <p class="yearAttendance">
                        BSIT - 1 Attendance
                        </p>
                <div class="input-section">
                 <div>
                    <p>Input Here:</p>
                    <input type="text" placeholder="Name Here" class="field" id="nameInput" onkeydown="handleKeyPress(event)">
                 </div>
                 <div>
                    <p class="deletetext" onclick = "deleteElement(this)">
                        Delete All
                    </p>
                    <button class="submitBtn" onclick = "renderAttendeesName(this)"> Submit</button>
                 </div>
              </div>
              <button class="downloadBtn" onclick="downloadAttendance(this)">Download</button>
            </div>`
     
        } else if (this.innerHTML.trim() === yearSection[1]){
                sheetAttendanceContainer.innerHTML = `
                <div class="sheet-attendance">
                        <p class="yearAttendance">
                        BSIT - 2 Attendance
                        </p>
                <div class="input-section">
                 <div>
                    <p>Input Here:</p>
                    <input type="text" placeholder="Name Here" class="field" id="nameInput" onkeydown="handleKeyPress(event)">
                 </div>
                 <div>
                    <p class="deletetext" onclick = "deleteElement(this)">
                        Delete All
                    </p>
                    <button class="submitBtn" onclick = "renderAttendeesName(this)"> Submit</button>
                 </div>
              </div>
              
            </div>`
        } else if (this.innerHTML.trim() === yearSection[2]){
                sheetAttendanceContainer.innerHTML = `
                <div class="sheet-attendance">
                        <p class="yearAttendance">
                        BSIT - 3 Attendance
                        </p>
                <div class="input-section">
                 <div>
                    <p>Input Here:</p>
                    <input type="text" placeholder="Name Here" class="field" id="nameInput" onkeydown="handleKeyPress(event)" >
                 </div>
                 <div>
                    <p class="deletetext" onclick = "deleteElement(this)">
                        Delete All
                    </p>
                    <button class="submitBtn" onclick = "renderAttendeesName(this)"> Submit</button>
                 </div>
              </div>
             
            </div>`
        }else {
                sheetAttendanceContainer.innerHTML = `
                <div class="sheet-attendance">
                        <p class="yearAttendance">
                        BSIT - 4 Attendance
                        </p>
                <div class="input-section">
                 <div>
                    <p>Input Here:</p>
                    <input type="text" placeholder="Name Here" class="field" id="nameInput" onkeydown="handleKeyPress(event)">
                 </div>
                 <div>
                    <p class="deletetext" onclick = "deleteElement(this)">
                        Delete All
                    </p>
                    <button class="submitBtn" onclick = "renderAttendeesName(this)"> Submit</button>
                 </div>
              </div>
              
            </div>`
        }

        sheetContent.appendChild(sheetAttendanceContainer)
}

function showAttendanceFisheries () {
        let sheetAttendanceContainer = document.createElement('div')
        const yearSection = ['BSF - 1', 'BSF - 2', 'BSF - 3', 'BSF - 4' ]
        if (this.innerHTML.trim() === yearSection[0]) {
                    sheetAttendanceContainer.innerHTML = `
                    <div class="sheet-attendance">
                        <p class="yearAttendanceFish">
                            BSF - 1 Attendance
                            </p>
                    <div class="input-section">
                     <div>
                        <p>Input Here:</p>
                        <input type="text" placeholder="Name Here" class="field" id="nameInput" onkeydown="handleKeyPress(event)">
                     </div>
                     <div>
                        <p class="deletetext" onclick = "deleteElement(this)">
                            Delete All
                        </p>
                        <button class="submitFishBtn" onclick = "renderAttendeesName(this)"> Submit</button>
                     </div>
                  </div>
                        
                </div>`
         
            } else if (this.innerHTML.trim() === yearSection[1]){
                    sheetAttendanceContainer.innerHTML = `
                    <div class="sheet-attendance">
                         <p class="yearAttendanceFish">      
                            BSF - 2 Attendance
                            </p>
                    <div class="input-section">
                     <div>
                        <p>Input Here:</p>
                        <input type="text" placeholder="Name Here" class="field" id="nameInput" onkeydown="handleKeyPress(event)">
                     </div>
                     <div>
                        <p class="deletetext" onclick = "deleteElement(this)">
                            Delete All
                        </p>
                        <button class="submitFishBtn" onclick = "renderAttendeesName(this)"> Submit</button>
                     </div>
                  </div>
                        
                </div>`
            } else if (this.innerHTML.trim() === yearSection[2]){
                    sheetAttendanceContainer.innerHTML = `
                    <div class="sheet-attendance">
                        <p class="yearAttendanceFish">
                            BSF - 3 Attendance
                            </p>
                    <div class="input-section">
                     <div>
                        <p>Input Here:</p>
                        <input type="text" placeholder="Name Here" class="field" id="nameInput" onkeydown="handleKeyPress(event)">
                     </div>
                     <div>
                        <p class="deletetext" onclick = "deleteElement(this)">
                            Delete All
                        </p>
                        <button class="submitFishBtn"  onclick = "renderAttendeesName(this)"> Submit</button>
                     </div>
                  </div>
                       
                </div>`
            }else {
                    sheetAttendanceContainer.innerHTML = `
                    <div class="sheet-attendance">
                            <p class="yearAttendanceFish">
                            BSF - 4 Attendance
                            </p>
                    <div class="input-section">
                     <div>
                        <p>Input Here:</p>
                        <input type="text" placeholder="Name Here" class="field" id="nameInput" onkeydown="handleKeyPress(event)">
                     </div>
                     <div>
                        <p class="deletetext" onclick = "deleteElement(this)">
                            Delete All
                        </p>
                        <button class="submitFishBtn"onclick = "renderAttendeesName(this)"> Submit</button>
                     </div>
                  </div>
                
    
                </div>`
            }
    
            sheetContent.appendChild(sheetAttendanceContainer)
}

function showName(sheetAttendanceContainer) {
        const nameInput = sheetAttendanceContainer.querySelectorAll('#nameInput');
        
        nameInput.forEach(input => {
          const inputValue = input.value;
          
          const box = document.createElement('div');
          box.classList.add('sheet-result');
          box.innerHTML = `
            <p>${inputValue}</p>
            <button onclick="deleteBox(this)">del</button>
          `;
          
          sheetAttendanceContainer.appendChild(box);
          input.value = ''
        });
   
      }
      function renderAttendeesName(submitBtn) {
        const sheetAttendanceContainer = submitBtn.parentNode.parentNode.parentNode;
        showName(sheetAttendanceContainer);
  }

function deleteBox(btn) {
        btn.parentElement.remove()
}

function handleKeyPress(event) {
        if (event.keyCode === 13) {
         event.preventDefault(); 
          showName(event.target.parentNode.parentNode.parentNode);
        }
      }


function deleteElement(del){
        // sheetAttendanceContainer.parentElement.parentElement.remove()
        del.parentElement.parentElement.parentElement.remove()
}



selectBtn.forEach(btn => {
        btn.addEventListener('click', showAttendance)
})

selectFishBtn.forEach(btn => {
        btn.addEventListener('click', showAttendanceFisheries)
})






function hidePopUps() {
        attendance.style.display = 'none';  
        attendanceFisheries.style.display = 'none';  
      }
      
hideBtn.forEach(function(btn) {
        btn.addEventListener('click', hidePopUps);
      });


infoTechBtn.addEventListener('click', () => {

        attendanceFisheries.style.display = 'none'   
        attendance.style.display = 'block'   
})
fisheriesBtn.addEventListener('click', () => {
       
        attendance.style.display = 'none'
        attendanceFisheries.style.display = 'block' 
})


function downloadAttendance(downloadBtn) {
   // Get the sheet attendance container element
   const sheetAttendanceContainer = downloadBtn.parentNode.parentNode;
 
   // Get the attendance results elements
   const attendanceResults = sheetAttendanceContainer.getElementsByClassName('sheet-result');
 
   // Create a new Excel workbook
   const workbook = new ExcelJS.Workbook();
   const worksheet = workbook.addWorksheet('Attendance');
 
   // Get the section title
   const sectionTitle = sheetAttendanceContainer.querySelector('.yearAttendance').textContent;
 
   // Add the section title to the worksheet
   worksheet.getCell('A1').value = sectionTitle;
   worksheet.getCell('A1').alignment = { horizontal: 'center' };
   worksheet.mergeCells('A1:B1');
 
   // Write the current date to the worksheet
   const currentDate = new Date().toLocaleDateString();
   worksheet.getCell('A2').value = `Date: ${currentDate}`;
   worksheet.getCell('A2').alignment = { horizontal: 'center' };
   worksheet.mergeCells('A2:B2');
 
   // Loop through the attendance results and add them to the worksheet
   for (let i = 0; i < attendanceResults.length; i++) {
     const attendanceResult = attendanceResults[i];
     const name = attendanceResult.querySelector('p').textContent;
 
     // Write the name to the worksheet
     worksheet.getCell(`A${i + 4}`).value = name;
     worksheet.getCell(`A${i + 4}`).alignment = { horizontal: 'center' };

     // Merge and center the column
      worksheet.mergeCells(`A${i + 4}:B${i + 4}`);
      worksheet.getCell(`A${i + 4}`).alignment = { horizontal: 'center' };
   }
 
   // Generate the Excel file
   workbook.xlsx.writeBuffer().then(buffer => {
     // Create a Blob from the buffer
     const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
 
     // Create a temporary anchor element
     const anchor = document.createElement('a');
     anchor.href = URL.createObjectURL(blob);
     anchor.download = 'attendance.xlsx';
 
     // Programmatically click the anchor to trigger the download
     anchor.click();
 
     // Clean up the temporary anchor and URL object
     anchor.remove();
     URL.revokeObjectURL(anchor.href);
   });
 }
 
