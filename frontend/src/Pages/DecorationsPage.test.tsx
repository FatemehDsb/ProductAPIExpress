//writing test fpr decorationspage
//lektion 4 : 14:49


import { describe, it, beforeEach, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {DecorationsPage} from './DecorationsPage';




beforeEach(() => render(<DecorationsPage/>));

describe('DecorationsPage component', () => {
  it('should have a heading with the text Popular decrations', () => {
    const heading = screen.getByRole('heading', { name: /decorations$/i });
    expect(heading).toBeInTheDocument();
});

//   describe('Populare decrations REST API call', () => {
//     it ("should have a name for each decoration", async ()=>{
//         const names = await screen.findAllByRole("listitem");
//         expect(names).toHaveLength(2);

//         const productNames = names.map((elem)=>elem.textContent)
//         expect(productNames).toContain("Christmas Lights");
//         expect(productNames).toContain("Wreath");
//     })
//   })

});