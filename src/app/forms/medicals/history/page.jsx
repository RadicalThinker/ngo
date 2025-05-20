import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

const WithdrawalHistory = [
  "Alcohol",
  "Drugs",
  "Tremors",
  "Nausea",
  "Vomiting",
  "Diarrhoea",
  "Severe pain",
  "Restlessness",
  "Hallucination",
  "Seizures",
  "Sleeplessness",
];

const OtherDisorders = [
  "Depression",
  "Special Delusions / Manias",
  "Confusion",
  "Aggressive Outbursts",
  "Hallucinations",
  "Seizures",
];

const PastMedicalHistory = ["Hypertension", "Diabetes", "Asthama"];

const ChronicConditions = [
  "Diabetes",
  "Liver Disorder",
  "Epilepsy",
  "Respiratory Problems",
  "Cardiac Problems",
  "Infections",
  "Orthopaedic",
];

const Symptoms = [
  "Tremors",
  "Jaundice",
  "Malnutrition",
  "Enlarged Nodes",
  "Clubbing of nails",
  "Skin issues",
  "Wasting of muscles",
  "Anaemia",
  "Others",
];

const AdditionalFindings = [
  "Palmar erythema",
  "Gynecomastia",
  "Pedal oedema",
];

const Systems = [
  "Respiratory System",
  "Cardiovascular System",
  "Gastrointestinal System",
  "Nervous System",
  "Genito Urinary System",
];

export default function RehabMedicalForm() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">Patient History</h2>

      <section>
        <h3 className="text-xl font-semibold mb-2">Withdrawal Symptoms (Tick whichever applicable)</h3>
        <div className="grid grid-cols-2 gap-2">
          {WithdrawalHistory.map((item) => (
            <Label key={item} className="flex items-center space-x-2">
              <Checkbox id={item} /> <span>{item}</span>
            </Label>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Other Disorders (Tick whichever applicable)</h3>
        <div className="grid grid-cols-2 gap-2">
          {OtherDisorders.map((item) => (
            <Label key={item} className="flex items-center space-x-2">
              <Checkbox id={item} /> <span>{item}</span>
            </Label>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">History of Other Medical Problems (Tick whichever applicable)</h3>
        <div className="grid grid-cols-2 gap-2">
          {PastMedicalHistory.map((item) => (
            <Label key={item} className="flex items-center space-x-2">
              <Checkbox id={item} /> <span>{item}</span>
            </Label>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Chronic Health Problems (Tick whichever applicable)</h3>
        <div className="grid grid-cols-2 gap-2">
          {ChronicConditions.map((item) => (
            <Label key={item} className="flex items-center space-x-2">
              <Checkbox id={item} /> <span>{item}</span>
            </Label>
          ))}
          <Input placeholder="Other (Specify)" />
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Present Condition at Time of Admission</h3>
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Blood Pressure" />
          <Input placeholder="Pulse" />
          <Input placeholder="Urine Sugar" />
          <Input placeholder="Weight" />
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Tick whichever applicable on examination</h3>
        <div className="grid grid-cols-2 gap-2">
          {Symptoms.map((item) => (
            <Label key={item} className="flex items-center space-x-2">
              <Checkbox id={item} /> <span>{item}</span>
            </Label>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Other Observations</h3>
        <div className="grid grid-cols-2 gap-2">
          {AdditionalFindings.map((item) => (
            <Label key={item} className="flex items-center space-x-2">
              <Checkbox id={item} /> <span>{item}</span>
            </Label>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Systematic Exam / In Examination of Systems</h3>
        <div className="space-y-2">
          {Systems.map((system) => (
            <Label key={system} className="flex items-center justify-between">
              <span>{system}</span>
              <div className="space-x-4">
                <Label className="inline-flex items-center space-x-1">
                  <Checkbox /> <span>Yes</span>
                </Label>
                <Label className="inline-flex items-center space-x-1">
                  <Checkbox /> <span>No</span>
                </Label>
              </div>
            </Label>
          ))}
        </div>
      </section>
    </div>
  );
}
