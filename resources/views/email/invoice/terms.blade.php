<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>UP</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <!-- Styles -->
        <style>
            /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}a{background-color:transparent}[hidden]{display:none}html{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}a{color:inherit;text-decoration:inherit}svg,video{display:block;vertical-align:middle}video{max-width:100%;height:auto}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-gray-100{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.border-gray-200{--border-opacity:1;border-color:#edf2f7;border-color:rgba(237,242,247,var(--border-opacity))}.border-t{border-top-width:1px}.flex{display:flex}.grid{display:grid}.hidden{display:none}.items-center{align-items:center}.justify-center{justify-content:center}.font-semibold{font-weight:600}.h-5{height:1.25rem}.h-8{height:2rem}.h-16{height:4rem}.text-sm{font-size:.875rem}.text-lg{font-size:1.125rem}.leading-7{line-height:1.75rem}.mx-auto{margin-left:auto;margin-right:auto}.ml-1{margin-left:.25rem}.mt-2{margin-top:.5rem}.mr-2{margin-right:.5rem}.ml-2{margin-left:.5rem}.mt-4{margin-top:1rem}.ml-4{margin-left:1rem}.mt-8{margin-top:2rem}.ml-12{margin-left:3rem}.-mt-px{margin-top:-1px}.max-w-6xl{max-width:72rem}.min-h-screen{min-height:100vh}.overflow-hidden{overflow:hidden}.p-6{padding:1.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.pt-8{padding-top:2rem}.fixed{position:fixed}.relative{position:relative}.top-0{top:0}.right-0{right:0}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.text-center{text-align:center}.text-gray-200{--text-opacity:1;color:#edf2f7;color:rgba(237,242,247,var(--text-opacity))}.text-gray-300{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.underline{text-decoration:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-5{width:1.25rem}.w-8{width:2rem}.w-auto{width:auto}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}@media (min-width:640px){.sm\:rounded-lg{border-radius:.5rem}.sm\:block{display:block}.sm\:items-center{align-items:center}.sm\:justify-start{justify-content:flex-start}.sm\:justify-between{justify-content:space-between}.sm\:h-20{height:5rem}.sm\:ml-0{margin-left:0}.sm\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\:pt-0{padding-top:0}.sm\:text-left{text-align:left}.sm\:text-right{text-align:right}}@media (min-width:768px){.md\:border-t-0{border-top-width:0}.md\:border-l{border-left-width:1px}.md\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:1024px){.lg\:px-8{padding-left:2rem;padding-right:2rem}}@media (prefers-color-scheme:dark){.dark\:bg-gray-800{--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}.dark\:bg-gray-900{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}.dark\:border-gray-700{--border-opacity:1;border-color:#4a5568;border-color:rgba(74,85,104,var(--border-opacity))}.dark\:text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.dark\:text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}}
        </style>

        <style>
			body {
				font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
				text-align: center;
				color: #777;
			}

			body h1, h4, h4 {
				font-weight: 300;
				margin-bottom: 0px;
				padding-bottom: 0px;
                text-align: center;
				color: #000;
			}


			body h3 {
				font-weight: 300;
				margin-top: 10px;
				margin-bottom: 20px;
				font-style: italic;
				color: #555;
			}

			body a {
				color: #06f;
			}

			.invoice-box {
				max-width: 800px;
				margin: auto;
				padding: 30px;
				border: 1px solid #eee;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
				font-size: 16px;
				line-height: 24px;
				font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
				color: #555;
			}

			.invoice-box table {
				width: 100%;
				line-height: inherit;
				text-align: center;
				border-collapse: collapse;
			}

			.invoice-box table td {
				padding: 5px;
				vertical-align: top;
			}

			.invoice-box table tr td:nth-child(2) {
				text-align: right;
			}

			.invoice-box table tr.top table td {
				padding-bottom: 20px;
			}

			.invoice-box table tr.top table td.title {
				font-size: 35px;
				line-height: 45px;
				color: #333;
			}

			.invoice-box table tr.information table td {
				padding-bottom: 40px;
                text-align: left
			}

			.invoice-box table tr.heading td {
				background: #eee;
				border-bottom: 1px solid #ddd;
				font-weight: bold;
			}

			.invoice-box table tr.details td {
				padding-bottom: 20px;
			}

			.invoice-box table tr.item td {
				border-bottom: 1px solid #eee;
			}

			.invoice-box table tr.item.last td {
				border-bottom: none;
			}

			.invoice-box table tr.total td:nth-child(2) {
				border-top: 2px solid #eee;
				font-weight: bold;
			}

			.invoice-box table tr.total td.title {
                text-align: right;
			}

			@media only screen and (max-width: 600px) {
				.invoice-box table tr.top table td {
					width: 100%;
					display: block;
					text-align: center;
				}

				.invoice-box table tr.information table td {
					width: 100%;
					display: block;
					text-align: center;
				}
			}
        </style>
    </head>
    <body class="antialiased">

                <h1></h1>

                <div class="invoice-box">
                    <table>

                        <tr class="top">
                            <td colspan="2">
                                <table>
                                    <tr>
                                        <td class="title">
                                            <img src="https://stepup.ae/img/logoStepUp.png"
                                                alt="Company logo"
                                                style="width: 100%; max-width: 300px" /><br>
                                            Class Terms & Conditions
                                        </td>
                                    </tr>
                                </table>

                            </td>
                        </tr>

                        <tr class="information">
                            <td>
                                <h4><u>Payment and Registration Policy</u></h4>
                                <ol>
                                    <li>A one-time registration fee of 150dhs is due at the time of registration for any class at StepUp Academy (SUA). The registration fee will become invalid if you are absent for more than 3 terms or longer.</li>
                                    <li>All trial classes must be paid for.</li>
                                    <li>Methods of payment accepted in our MotorCity branch are cash, card, or cheques made payable to StepUp Academy. Bank transfer is available upon request. It is your responsibility to provide a copy of the transfer advice slip as we cannot trace payments. Payment methods accepted vary for external venues, please check with the centre accordingly.</li>
                                    <li>If fees are not settled before the class, then SUA reserves the right to exclude that student from the class. Fees are required before or on the first day of class. Any unpaid fees will result in non-participation until the fees are settled.</li>
                                    <li>In case of a dishonored cheque, a bank fee of 100 AED for each returned cheque may apply after being assessed.</li>
                                    <li>Class space can only be guaranteed once the full fees and documentation have been completed and received.</li>
                                    <li>SUA management reserves the right to refuse re-admission into the school if there are any outstanding balances.</li>
                                    <li>It is the responsibility of the person filling out the registration form to provide a spell checked, current email address, correct contact numbers, and that they are updated with us if need be. Important information on classes, examinations, and shows will be sent to this email account.</li>
                                    <li>SUA reserves the right to make changes and exceptions to the fees policy, at our discretion, at any time.</li>
                                </ol>

                                <h4><u>Refund Policy</u></h4>
                                <ol>
                                    <li>Class fees are non-refundable. Exceptions may be made if there is proof there is a valid medical reason as to why the student cannot attend the class. In this situation, we can make an exception to freeze the account and have it transferred to the following term only. If this is the case, then the fees must be used by the end of the following term and cannot be carried over.</li>
                                    <li>Missed classes are <strong><u>non-refundable</u></strong> and <strong><u>cannot be carried over to a new term.</u></strong> If you inform us in advance that you are not able to make the class, we can allow a make-up class to be taken. We will advise you which classes, days and times your child can attend for a make-up class, this may be in an alternate dance style. Make-up lessons must be booked in advance through our reception team, for safety reasons you cannot just show up on the day. A maximum of 2 make-up classes can be redeemed during a term. After 2 make-up classes, you forfeit your space in your chosen class and it will be offered to other students on the waiting list.</li>
                                    <li>Should classes be required to be cancelled for reasons beyond our control (for example a short notice private holiday announcement, changing of private holiday dates, closure of any of our locations, global pandemics, notification from any of the governments/ministry’s etc… and more) then students will be eligible to attend a make-up lessons, our reception team will be in touch via email should this be the case. These classes will not be refunded.</li>
                                    <li>Any payments made towards school trips, annual shows, examinations, uniforms, events etc… are all non-refundable and un transferable.</li>
                                    <li>Any refunds which take place, will be after any VAT, Credit Charges have been deducted.</li>
                                    <li>Any fees paid for any examinations, end of year shows, events etc… are all non-refundable. Credit notes will be given if any of the above must be postponed or cancelled due to reasons out of our control.</li>
                                </ol>

                                <h4><u>Photos, videos and CCTV</u></h4>
                                <ol>
                                    <li>On occasion, photos and videos may be taken within classes, performances or preparation for examinations of students. I consent that these photos or videos may be taken and used for social media, advertising or promotional purposes without prior notification or compensation to myself or my child. If you do not agree to the use of photography of your child or yourself, kindly email us to inform us on <a href="mailto:salesandmarketing@stepup.ae">salesandmarketing@stepup.ae</a></li>
                                    <li>I am aware that there are CCTV cameras in all the studios, reception and waiting areas of SUA MotorCity branch. By signing this agreement, I acknowledge and consent to the use of CCTV within SUA of myself and my child.</li>
                                    <li>I understand that I am not able to and cannot request to see any CCTV footage. If there is a specific reason in which I want to view something, then I know I have to go through the correct authorities and let them handle it.</li>
                                </ol>

                                <h4><u>Classes and Examinations</u></h4>
                                <ol>
                                    <li>I understand that I am not permitted to sit in and watch my child’s class, and that all parents must remain outside the studio/room until the class is finished and students are brought out. SUA will hold “Open Day” classes where parents can sit in and watch the duration of the class. Parents will be informed when these are taking place.</li>
                                    <li>I am aware that the correct uniform and footwear <strong><u>must</u></strong> be worn to attend the classes. Uniforms must be purchased and worn by the third class my child attends.</li>
                                    <li>I understand that I do not have the right to stipulate which level class I/my child should be in. All classes have either an age limit or they state that they are arranged by ability. This means the teacher decides which class you/your child is eligible for. The teacher’s decision is the final decision and management will support this.</li>
                                    <li>I am aware that to take part in any annual exams, recitals or shows throughout the year that I/my child must purchase the correct attire, otherwise I/my child shall not be able to take part under any circumstances. I also understand that I need to do the required sign up procedure within the time frames given by SUA and that such events will have additional costs involved.</li>
                                    <li>When examination decisions start to take place, I am aware that the only request I can make is that my child does not take part in it. The final decision is down to the teacher in charge and based on an assessment, if your child is not chosen to take the examination then there will be a valid reason which you can discuss with the teacher. However, the final choice is down to the teacher and management will support this.</li>
                                    <li>We are aware that sometimes teachers may arrive late due to unforeseen situations. However, if a class needs to be cancelled due to this, StepUp Academy shall make sure all customers are compensated accordingly if need be.</li>
                                    <li>Classes are scheduled at a usual 30, 45 or 60 minute time slot. This timing also allows for a short period at the start and end of each class for registration to take place and for class handover management.</li>
                                    <li>Students must be picked up at the class end time, teachers are only responsible for students during the designated time slot of the class. Please call our reception team if you will be running late.</li>
                                    <li>I am aware that all the programmes come with a risk of injury due to the nature of the classes and waive all claims against StepUp Academy, Owners, Management, Teachers & Staff members</li>
                                    <li>All fees for classes, events, shows, exams, stock items are non-refundable – please check the <strong><u><i>“Refund Policy”</i></u></strong></li>
                                </ol>

                                <h4><u>General</u></h4>
                                <ol>
                                    <li>StepUp Academy management reserves the right to add, modify and/or amend the terms & conditions from time to time at its absolute discretion.</li>
                                    <li>StepUp Academy follows a zero-tolerance against abusive behaviour aimed at any of their staff members or customers. In such cases, StepUp Academy management shall hold the right to decide if they stay members or are asked kindly to leave the centre.</li>
                                    <li>I am aware that the SUA reception staff are not responsible if my child leaves the SUA premises before or after class.</li>
                                    <li>I have read and accepted the terms & conditions laid down.</li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <br>
                                <br>
                                <table>
                                    <tr>
                                        <td>Date: </td>
                                        <td>
                                            {{ date('M d, Y') }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Full name of parent/guardian: </td>
                                        <td>
                                            {{ $mother['first_name'] }} {{ $mother['family_name'] }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Full name of student:</td>
                                        <td>{{ $children['first_name'] }} {{ $children['family_name'] }} </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>

    </body>
</html>
