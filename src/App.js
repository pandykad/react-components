import CompoDetail from "./CompoDetail";
import React from 'react';
import { faker } from '@faker-js/faker';
import ApprovalCard from "./ApprovalCard";



function App() {
  return (
    <div>
      <div className="ui comments">
        <ApprovalCard>
          <CompoDetail user="Pratik" avatar={faker.image.avatar()}/>
        </ApprovalCard>

        <ApprovalCard>
          <CompoDetail user="Ameya" avatar={faker.image.avatar()}/>
        </ApprovalCard>

        <ApprovalCard>
          <CompoDetail user="Prajwal" avatar={faker.image.avatar()}/>
        </ApprovalCard>
          
      </div>
    </div>
  );
}

export default App;
