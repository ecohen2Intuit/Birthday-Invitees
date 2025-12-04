/**
 * Mock API for sending invitations
 * Simulates a network request with a delay
 */

export const sendInvitations = async (invitees) => {
  // Simulate network delay (1-2 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simulate 90% success rate
  const success = Math.random() > 0.1;

  if (!success) {
    throw new Error("Failed to send invitations. Please try again.");
  }

  return {
    success: true,
    message: `Successfully sent invitations to ${invitees.length} people!`,
    invitees: invitees,
  };
};
